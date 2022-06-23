import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-ad-unit-sizes',
  templateUrl: './list-ad-unit-sizes.component.html',
  styleUrls: ['./list-ad-unit-sizes.component.scss'],
})
export class ListAdUnitSizesComponent implements OnInit {
  listAd = [
    {
      size: {
        width: 300,
        height: 250,
        isAspectRatio: false,
      },
      environmentType: 'BROWSER',
      companions: [],
      fullDisplayString: '300x250',
      isAudio: false,
    },
    {
      size: {
        width: 300,
        height: 250,
        isAspectRatio: false,
      },
      environmentType: 'BROWSER',
      companions: [],
      fullDisplayString: '300x250',
      isAudio: false,
    },
    {
      size: {
        width: 300,
        height: 250,
        isAspectRatio: false,
      },
      environmentType: 'BROWSER',
      companions: [],
      fullDisplayString: '300x250',
      isAudio: false,
    },
    {
      size: {
        width: 300,
        height: 250,
        isAspectRatio: false,
      },
      environmentType: 'BROWSER',
      companions: [],
      fullDisplayString: '300x250',
      isAudio: false,
    },
    {
      size: {
        width: 300,
        height: 250,
        isAspectRatio: false,
      },
      environmentType: 'BROWSER',
      companions: [],
      fullDisplayString: '300x250',
      isAudio: false,
    },
    {
      size: {
        width: 300,
        height: 250,
        isAspectRatio: false,
      },
      environmentType: 'BROWSER',
      companions: [],
      fullDisplayString: '300x250',
      isAudio: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
