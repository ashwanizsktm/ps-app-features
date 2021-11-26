import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashflowRoutingModule } from './cashflow-routing.module';
import { CashflowComponent } from './cashflow.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


@NgModule({
  declarations: [
    CashflowComponent,
    PaymentStepComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    CashflowRoutingModule
  ]
})
export class CashflowModule { }
