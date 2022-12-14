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
  touched: boolean;
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

  ngOnInit(): void {
    this.f.date.setValue(this.today);
    this.dateString = this.datePipe.transform(this.today, 'dd-MM-yyyy');
    this.searchDate();
  }

  get f() {
    return this.formDate.controls;
  }

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
        this.listDate = resp.message;
        this.touched = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
