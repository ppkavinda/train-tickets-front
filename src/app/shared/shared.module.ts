import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FooterComponent } from '../public/pages/landing/footer/footer.component';
import { AlertComponent } from '../public/pages/common/alert/alert.component';

@NgModule({
    declarations: [

        FooterComponent,
        AlertComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FooterComponent,
        AlertComponent
    ]
})

export class SharedModule { }