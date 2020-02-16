import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';
import { AlertService } from 'src/app/public/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      passwordConf: new FormControl("", [Validators.required])
    }, { validator: this.mustMatch('password', 'passwordConf') });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  get email() {
    return this.registerForm.get('email');
  }
  get mobile() {
    return this.registerForm.get('mobile');
  }
  get passowrdConf() {
    return this.registerForm.get('passwordConf');
  }
}
