import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashflowRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
    PaymentStepComponent,
    DisclaimerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CashflowRoutingModule
  ]
})
export class CashflowModule { }
