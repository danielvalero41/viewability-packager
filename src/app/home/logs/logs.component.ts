import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiAdManagerService } from '../services/api-ad-manager.service';
import { differenceInCalendarDays } from 'date-fns';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  formDate: FormGroup;
  dateString;
  listDate;
  today = new Date();

  constructor(
    public fb: FormBuilder,
    public datePipe: DatePipe,
    public apiAdManager: ApiAdManagerService
  ) {
    this.formDate = this.fb.group({
      date: [''],
    });
  }

  ngOnInit(): void {}

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;

  getDate(e) {
    this.dateString = this.datePipe.transform(e, 'dd-MM-yyyy');
  }

  searchDate() {
    let body = {
      fecha: this.dateString,
    };
    this.apiAdManager.getListLog(body).subscribe(
      (resp) => {
        console.log(resp);
        this.listDate = resp.message[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
