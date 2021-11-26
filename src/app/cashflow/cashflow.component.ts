import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.scss'],
})
export class CashflowComponent implements OnInit, AfterViewInit {
  open_btn!: HTMLElement;
  close_btn!: HTMLButtonElement;
  popup!: HTMLElement;
  main_popup!: HTMLElement;
  closeStatus!: boolean;
  constructor() {}
  // start of dummy data
  theData = [
    { id: 1, date: '21 Jan 2021', amount: '27056.00' },
    { id: 2, date: '21 Feb 2021', amount: '27056.00' },
    { id: 3, date: '21 Mar 2021', amount: '27056.00' },
    { id: 4, date: '21 Apr 2021', amount: '27056.00' },
    { id: 5, date: '21 May 2021', amount: '27056.00' },
    { id: 6, date: '21 Jun 2021', amount: '27056.00' },
    { id: 7, date: '21 Jul 2021', amount: '27056.00' },
    { id: 8, date: '21 Aug 2021', amount: '27056.00' },
    { id: 9, date: '21 sep 2021', amount: '27056.00' },
    { id: 10, date: '21 Oct 2021', amount: '27056.00' },
    { id: 11, date: '21 Nov 2021', amount: '27056.00' },
    { id: 12, date: '21 Dec 2021', amount: '27056.00' },
    { id: 13, date: '21 Jan 2022', amount: '27056.00' },
    { id: 14, date: '21 Feb 2022', amount: '27056.00' },
    { id: 15, date: '21 Mar 2022', amount: '27056.00' },
    { id: 16, date: '21 Apr 2022', amount: '27056.00' },
    { id: 17, date: '21 May 2022', amount: '27056.00' },
    { id: 18, date: '21 Jun 2022', amount: '27056.00' },
    { id: 19, date: '21 Jul 2022', amount: '27056.00' },
    { id: 20, date: '21 Aug 2022', amount: '27056.00' },
    { id: 21, date: '21 sep 2022', amount: '27056.00' },
    { id: 22, date: '21 Oct 2022', amount: '27056.00' },
    { id: 23, date: '21 Nov 2022', amount: '27056.00' },
    { id: 24, date: '21 Dec 2022', amount: '27056.00' },
  ];
  // End of dummy data

  ngOnInit(): void {
    this.slideinandOutChasflow();
  }

  ngAfterViewInit() {

  }

  slideinandOutChasflow() {
    this.open_btn = document.querySelector('.open-btn')!;
    this.close_btn = document.querySelector('.close-btn')!;
    this.popup = document.querySelector('.popup')!;
    this.main_popup = document.querySelector('.main-popup')!;

    window.addEventListener('click', (e) => {
      this.closeStatus = false;
      if (e.target == document.querySelector('.popup-overlay')) {
        this.main_popup.style.cssText ='animation:slide-out .5s ease; animation-fill-mode: forwards;';
        setTimeout(() => {
          this.popup.style.display = 'none';
        }, 500);
      }
    });
  }

  openCashFlow() {
    this.closeStatus = true;
    // console.log(this.closeStatus)
    this.popup.style.display = 'flex';
      this.main_popup.style.cssText ='animation:slide-in .5s ease; animation-fill-mode: forwards;';
  }

  closeCashflow() {
    this.closeStatus = false;
    // console.log(this.closeStatus)
    this.main_popup.style.cssText ='animation:slide-out .5s ease; animation-fill-mode: forwards;';
   setTimeout(() => {
    this.popup.style.display = 'none';
  }, 500);
  }
}
