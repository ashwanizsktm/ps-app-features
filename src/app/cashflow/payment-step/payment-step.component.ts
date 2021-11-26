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

   data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  displayData!: any[];
  prevBtn: boolean = true;
  nextBtn = true;
  prevInitialIdx!: number;
  prevlastIdx!: number;
  nextInitialIdx!: number;
  nextLastIdx!: number;

  @Input() PaymentData!: any[];
  @Input() closedStatus!: boolean;
  displayCashflow: any[] = [];
  tempArr:any[] = [];
  datesEle!: Element[];

  isSuccess!: boolean;
  isPending!: boolean;
  previousListItems!: NodeListOf<Element>;
  nextListItems!: NodeListOf<Element>;
  nextCashflowLeft!: number;
  constructor() {}

  ngOnInit() {
   this.setinititalCashflow();
   this.nextDataLenght =  this.nextData.length - 3;
   console.log("next", this.nextDataLenght)
  }

  ngOnChanges() {
    // this.nextDataLenght =  this.nextData.length - 3;
    if(this.closedStatus == true) {
      this.setCashflowStatus();
      this.nextBtn = true;
      this.prevBtn = true;
    } else if(this.closedStatus == false){
      this.setinititalCashflow();
      this.nextBtn = true;
      this.prevBtn = true;
    }
  }
  prevData:any[] = [];
  nextData:any[] = [];
  nextDataLenght!: any;
  predDataLenght!:number;

  setinititalCashflow() {
    const now: Date = new Date();
    let closest: any = Infinity;

    const allDataLenght = this.PaymentData.length;
    // console.log(allDataLenght)

    this.PaymentData.map((item, idx )=> {
      const date: Date = new Date(item.date);
      if (date >= now && (date < new Date(closest) || date < closest)) {
        closest = item.date;
        // console.log(idx)
        let n = idx;
        this.prevInitialIdx = n - 2;
        this.prevlastIdx = n;
        this.nextInitialIdx = n - 2;
        this.nextLastIdx = n + 2;
        this.tempArr = this.PaymentData.slice(n-2, n +3);
      }

      if(date > now) {
        this.nextData.push(item);
        // console.log("prevdata", prev)
        // console.log(item.lenght)
         console.log(this.nextData.length)

         this.isPending = true;
        this.isSuccess = false;

      }

      if(date < now) {
        this.prevData.push(item);
        this.isPending = false;
        this.isSuccess = true;
      }
    })


    // debugger;


    // console.log("prevData length", this.prevData.length)
  }


  showPrev() {
    this.nextBtn = true;
    let first = this.prevInitialIdx - 2;
    let last = this.prevlastIdx + 3;
    if (first <= 0) {
      first = 0;
      this.prevBtn = false;
    }
    this.tempArr = this.PaymentData.slice(first,last)
    this.prevInitialIdx = first;
  }

  showNext() {
    // debugger;
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

      if(el.parentElement.classList.contains('active-item')){
        el.previousElementSibling.previousElementSibling.style = 'display:none';
      }

      // if (date > now) {
      //   el.parentElement.className+= " future-cashflow"
      //   el.previousElementSibling.previousElementSibling.style ='display:none';
      // }
      // if (date < now) {
      //   el.parentElement.className+= " previous-cashflow"
      //   el.previousElementSibling.style = 'display:none';
      // }
    });
  }

  previousLstHeight!: number;
  nextListHeight!:number;

  ngAfterViewInit() {
    this.setCashflowStatus();

    const listItem = document.querySelector('.payment-order__list')! as HTMLElement;
    this.previousListItems = document.querySelectorAll('.previous-cashflow');
    this.nextListItems = document.querySelectorAll('.future-cashflow');

    //  this.previousListItems.forEach(item => {
    //    this.previousLstHeight =  item.clientHeight*this.previousListItems.length;
    //  })

    //  this.nextListItems.forEach(item => {
    //    this.nextListHeight = item.clientHeight*this.nextListItems.length
    //  })

    // console.log("prevlistItemsHeight",this.previousLstHeight);
    // console.log("nexlistItesHeight",this.nextListHeight);
    // console.log("clientHeight", listItem.clientHeight);
    // console.log("offsetHeight", listItem.offsetHeight);
    // console.log("scrollHeight", listItem.scrollHeight);
    // console.log("scroll to", listItem.scrollHeight);
    // console.log("clientHeight", listItem.clientHeight);
    // listItem.scrollTop(200)
    // listItem.scrollTop =  listItem.scrollHeight - listItem.offsetHeight;

    // listItem.scrollTop = 715;

    // listItem.scrollTop =

    // console.log("calculation",listItem.scrollHeight - this.previousLstHeight);
      // listItem.addEventListener('scroll', (e) => {
      //   listItem.scrollBy(0, 200);
      // })

  }
}


