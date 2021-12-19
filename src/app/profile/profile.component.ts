import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cashflow',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {


  constructor() {}
  // start of dummy data

    ipSchedule = [
      // {date: '21-Jan-2020', amount: '27056.00' },
      // {date: '21-Feb-2020', amount: '27056.00' },
      // {date: '21-Mar-2020', amount: '27056.00' },
      // {date: '21-Apr-2020', amount: '27056.00' },
      // {date: '21-May-2020', amount: '27056.00' },
      // {date: '21-Jun-2020', amount: '27056.00' },
      // {date: '21-Jul-2020', amount: '27056.00' },
      // {date: '21-Aug-2020', amount: '27056.00' },
      // {date: '21-sep-2020', amount: '27056.00' },
      // {date: '21-Oct-2020', amount: '27056.00' },
      // {date: '21-Nov-2020', amount: '27056.00' },
      // {date: '21-Dec-2020', amount: '27056.00' },

      // {date: '21-Jan-2021', amount: '27056.00' },
      // {date: '21-Feb-2021', amount: '27056.00' },
      {date: '21-Mar-2021', amount: '27056.00' },
      {date: '21-Apr-2021', amount: '27056.00' },
      {date: '21-May-2021', amount: '27056.00' },
      {date: '21-Jun-2021', amount: '27056.00' },
      {date: '21-Jul-2021', amount: '27056.00' },
      {date: '21-Aug-2021', amount: '27056.00' },
      {date: '21-sep-2021', amount: '27056.00' },
      {date: '21-Oct-2021', amount: '27056.00' },
      {date: '21-Nov-2021', amount: '27056.00' },
      {date: '21-Dec-2021', amount: '27056.00' },
      {date: '21-Jan-2022', amount: '27056.00' },
      {date: '21-Feb-2022', amount: '27056.00' },
      {date: '21-Mar-2022', amount: '27056.00' },
      {date: '21-Apr-2022', amount: '27056.00' },
      {date: '21-May-2022', amount: '27056.00' },
      {date: '21-Jun-2022', amount: '27056.00' },
      {date: '21-Jul-2022', amount: '27056.00' },
      {date: '21-Aug-2022', amount: '27056.00' },
      {date: '21-sep-2022', amount: '27056.00' },
      {date: '21-Oct-2022', amount: '27056.00' },
      {date: '21-Nov-2022', amount: '27056.00' },
      // {date: '21-Dec-2022', amount: '27056.00' }
    ]


  // End of dummy data
   theFlag = false;
  SliderStatusInfo!:any;
  openCashFlow() {
      this.SliderStatusInfo = {
        isShow: 'flex',
        isSlideOut: false
      }
      this.theFlag = true;
    }

  }
