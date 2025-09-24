import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing-module';
import { Checkout } from './checkout/checkout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared-module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import {MatRadioModule} from '@angular/material/radio';
import { Stepper } from './stepper/stepper';
import { AddressComponent } from './address/address.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    Checkout,
    Stepper, AddressComponent,
    DeliveryComponent,
    PaymentComponent, SuccessComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,

    SharedModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
   FormsModule,
    ReactiveFormsModule,
    MatRadioModule,   MatRadioModule,ReactiveFormsModule,
  ],
  exports:[Stepper,
    AddressComponent,
    DeliveryComponent,
    PaymentComponent]
})
export class CheckoutModule { }
