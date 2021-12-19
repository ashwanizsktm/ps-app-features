import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    Output,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
} from '@angular/core';

@Component({
    selector: 'app-payment-step',
    templateUrl: './payment-step.component.html',
    styleUrls: ['./payment-step.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentStepComponent implements OnInit,  OnChanges {
    successIconSrc ='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png';

    prevBtnIndex!: number;
    nextBtnIndex!: number;
    hidePrevBtn: boolean = false;
    hideNextBtn: boolean = false;

    @Input() paymentData!: any[];
    initialCashflow: any[] = [];

    @Input() closedStatus!: boolean;
    itemCountAfterNextPay = 0;

    constructor() { }


    ngOnInit() {
      this.setinititalCashflow();
      this.setCashflowStatus();
  }

  setinititalCashflow() {
      if (this.paymentData.length <= 5) {
          this.hidePrevBtn = true;
          this.hideNextBtn = true;
          this.initialCashflow = this.paymentData.slice(0, this.paymentData.length);
      } else {
          const now: Date = new Date();
          let closest: any = Infinity;

          this.paymentData.forEach((item, index) => {
              const date: Date = new Date(item.date);
              if (date >= now && (date < new Date(closest) || date < closest)) {
                  closest = item.date;
                  let nextPayDateId = index;
                  this.prevBtnIndex = nextPayDateId;
                  this.nextBtnIndex = nextPayDateId;
                  this.initialCashflow = this.paymentData.slice(nextPayDateId - 2, nextPayDateId + 3);
                  switch (nextPayDateId) {
                      case 0:
                          this.initialCashflow = this.paymentData.slice(0, nextPayDateId + 5);
                          console.log("next pay id is 0", nextPayDateId, this.initialCashflow);
                          break;
                      case 1:
                          this.initialCashflow = this.paymentData.slice(0, nextPayDateId + 4);
                          console.log("next pay id is 1", nextPayDateId, this.initialCashflow);
                          break;
                        case (nextPayDateId):
                          if (nextPayDateId >= 6) {
                              let secondLastIndex = this.paymentData.length - 2;
                              if (nextPayDateId >= secondLastIndex) {
                                  this.initialCashflow = this.paymentData.slice(secondLastIndex - 3, secondLastIndex + 3);
                              }
                          }
                        break;
                        default:
                  }
                  if (this.prevBtnIndex <= 2) this.hidePrevBtn = true;
                  this.itemCountAfterNextPay = (this.paymentData.length - (index + 1));
                  if(this.itemCountAfterNextPay <=2) this.hideNextBtn = true;
              }

          })
      }
  }



  showPrev() {
    if(this.itemCountAfterNextPay <=2){
      this.hideNextBtn = true;
      console.log(this.itemCountAfterNextPay);
    } else{
      this.hideNextBtn = false;
    }
      let first = 0;
      let last = this.prevBtnIndex + 3;
      this.initialCashflow = this.paymentData.slice(first, last);
      if (first <= 0) this.hidePrevBtn = true;
  }

  showNext() {
    let first;
      if(this.nextBtnIndex <= 2)first  = 0;
        else first = this.nextBtnIndex - 2;
      let last = this.paymentData.length;
      this.initialCashflow = this.paymentData.slice(first, last);
      if (last >= this.paymentData.length) this.hideNextBtn = true;
      if (this.prevBtnIndex <= 2) this.hidePrevBtn = true;
      else this.hidePrevBtn = false;
  }

  setCashflowStatus() {
    const now: Date = new Date();
    let closest: any = Infinity;
    if (this.paymentData.length > 0) {
        this.paymentData.forEach((item, index) => {
            item['serialNo'] = index + 1;
            const date: Date = new Date(item.date);
            if (date >= now && (date < new Date(closest) || date < closest)) {
                closest = item.date;
                item['active'] = true;
            }

            if (new Date(item.date) < now) item['isPaymentDone'] = true;
            else item['isPaymentDone'] = false;
        });
    }
}

  ngOnChanges() {
      if (this.closedStatus == true) {
          this.hideNextBtn = false;
          this.hidePrevBtn = false;
      } else if (this.closedStatus == false) {
          this.hideNextBtn = false;
          this.hidePrevBtn = false;
      }
      this.setinititalCashflow();
      this.setCashflowStatus();
  }
}
