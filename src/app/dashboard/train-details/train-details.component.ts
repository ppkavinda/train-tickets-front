import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from 'src/app/public/services/train.service';
import * as M from "materialize-css/dist/js/materialize";
import { AlertService } from 'src/app/public/services/alert.service';
import { SearchService } from 'src/app/public/services/search.service';
import { StationService } from 'src/app/public/services/station.service';
import { TicketService } from 'src/app/public/services/ticket.service';

declare var $: any;

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.scss']
})
export class TrainDetailsComponent implements OnInit {
  train: any;
  fromStation: any;
  toStation: any;
  fromParam: any;
  toParam: any;

  public price = 0;
  public quantity = 1;
  public arrivalDate: any;
  public category = 1;
  public from;
  public to;
  public categories: any[];
  public ticketCategory;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private trainService: TrainService,
    private alertService: AlertService,
    private searchService: SearchService,
    private ticketService: TicketService,
    private stationService: StationService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (!params['to'] || !params['from'] || !params['trainId']) {
        this.router.navigate(['dashboard']);
        this.alertService.success('asdf', true);
      }
      this.stationService.getStationById(params['from']).subscribe(station => this.fromStation = station.data);
      this.stationService.getStationById(params['to']).subscribe(station => this.toStation = station.data);
      this.trainService.getTrainDetails(params['trainId']).subscribe(train => this.train = train.data)
    })
    this.from = document.querySelectorAll('#from');
    this.to = document.querySelectorAll('#to');
    $(this.from).datepicker({ dateFormat: 'yyyy-mm-dd' });
    $(this.to).datepicker({ dateFormat: 'yyyy-mm-dd' });

    var trainName = document.querySelector('#train-name');
    var ticketPrice = document.querySelector('#ticket-price');
    $(trainName).focusin();
    $(ticketPrice).focusin();

    var fromLabel = document.querySelector('#from-label');
    var toLabel = document.querySelector('#to-label');
    $(fromLabel).focusin();
    $(toLabel).focusin();
    // // M.Datepicker.init(from, null);
    // M.Datepicker.init(to, null);
    this.searchService.currentResult.subscribe(train => {
      this.train = train;
    })


    this.stationService.getCategoryList().subscribe(res => {

      this.categories = res.data;
      setTimeout(() => {
        this.ticketCategory = document.querySelectorAll('#ticket-category');
        $(this.ticketCategory).formSelect();

      }, 1000);
    })
  }

  getPrice() {
    var instance = M.FormSelect.getInstance($(this.ticketCategory));
    // console.log(instance.el.value);

    this.category = instance.el.value;
    this.ticketService.getPrice(this.fromStation.id, this.toStation.id, +this.category)
      .subscribe(price => {
        this.price = price.data.price;

      })
  }

  onQuantityChange() {
    console.log(this.quantity);

    if (this.quantity <= 0) this.quantity = 1;
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  bookTicket() {
    var instance = M.Datepicker.getInstance($(this.from));
    this.arrivalDate = this.formatDate(instance.toString());
    console.log(this.authService.currentUserValue.userId);

    if (!this.arrivalDate || !this.quantity || !this.train || !this.train.id || !this.authService.currentUserValue.userId)
      return;

    return this.ticketService.bookTicket(this.arrivalDate,
      this.quantity,
      this.quantity * this.price,
      this.train.id,
      this.authService.currentUserValue.userId)
      .subscribe(res => {
        console.log(res.data);
        M.toast({ html: 'Booking ticket completed successfully!!' })
            this.router.navigate(['/'])

        this.ticketService.sendMessage(res.data.bookingdetailsId, this.authService.currentUserValue.phoneNumnber, res.data.totalTicketPrice)
          .subscribe(res => {
            // this.router.navigate(['/'])
            M.toast({ html: 'Ticket details will send to your mobile phone :)' })

            // this.alertService.success("Booking ticket completed successfully!!", true);
            console.log(res);

          }, error => {
            M.toast({ html: 'There is somthing wrong with SMS service:(' })

          })

      });
  }

}
