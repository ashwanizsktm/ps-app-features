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
export class PaymentStepComponent implements OnInit, AfterViewInit, OnChanges {
  successIconSrc =
    'https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png';

  prevBtn: boolean = true;
  nextBtn = true;
  prevInitialIdx!: number;
  prevlastIdx!: number;
  nextInitialIdx!: number;
  nextLastIdx!: number;

  @Input() PaymentData!: any[];
  @Input() closedStatus!: boolean;

  tempArr:any[] = [];
  datesEle!: Element[];

  constructor() {}

  ngOnInit() {
   this.setinititalCashflow();
   this.cashflowStatus();
  }

  prevData:any[] = [];
  nextData:any[] = [];
  nextDataLenght!: any;
  predDataLenght!:number;

  setinititalCashflow() {
    const now: Date = new Date();
    let closest: any = Infinity;
    this.PaymentData.map((item, idx )=> {
      const date: Date = new Date(item.date);
      if (date >= now && (date < new Date(closest) || date < closest)) {
        closest = item.date;
        let n = idx;
        this.prevInitialIdx = n - 2;
        this.prevlastIdx = n;
        this.nextInitialIdx = n - 2;
        this.nextLastIdx = n + 2;
        this.tempArr = this.PaymentData.slice(n-2, n +3);
      }
    })
  }

  cashflowStatus(){
    const now:Date = new Date()
    this.PaymentData.map((list) => {
      if (new Date(list.date) < now) list['isPaymentDone'] = true;
       else list['isPaymentDone'] = false;
      });
  }

  showPrev() {
    this.nextBtn = true;
    let first = this.prevInitialIdx - 2;
    let last = this.prevlastIdx + 3;
    if (first <= 0) {
      first = 0;
      this.prevBtn = false;
    }
    this.tempArr = this.PaymentData.slice(first, last)
    this.prevInitialIdx = first;
  }

  showNext() {
    this.nextDataLenght = this.nextDataLenght - 3;
    console.log("on showmore,", this.nextDataLenght);
    this.prevBtn = true;
    let first = this.nextInitialIdx;
    let last = this.nextLastIdx + 3;
    if (last > this.PaymentData.length) {
      this.nextBtn = false;
    }
    if(this.nextDataLenght <= 0) this.nextDataLenght = '';
    this.tempArr = this.PaymentData.slice(first, last);
    this.nextLastIdx = last;
  }

  setCashflowStatus() {
    const now: Date = new Date();
    let closest: any = Infinity;
    let datesEle = Array.from(
      document.querySelectorAll('.payment-order__list--item-date')
    );
    datesEle.forEach((el: any) => {
      const date: Date = new Date(el.textContent);
      if (date >= now && (date < new Date(closest) || date < closest)) {
        closest = el.textContent;
        el.parentElement.classList.add('active-item');
      }
    });
  }

  ngAfterViewInit() {
    this.setCashflowStatus();
  }
  ngOnChanges() {
    if(this.closedStatus == true) {
      this.nextBtn = true;
      this.prevBtn = true;
    } else if(this.closedStatus == false){
      this.setinititalCashflow();
      this.nextBtn = true;
      this.prevBtn = true;
    }
  }
}
