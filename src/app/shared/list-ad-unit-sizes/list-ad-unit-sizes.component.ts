import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list-ad-unit-sizes',
  templateUrl: './list-ad-unit-sizes.component.html',
  styleUrls: ['./list-ad-unit-sizes.component.scss'],
})
export class ListAdUnitSizesComponent implements OnInit {
  @Input() isModal: boolean;

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
      selected: true,
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
      selected: false,
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
      selected: true,
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
      selected: true,
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
      selected: false,
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
      selected: true,
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
      selected: true,
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
      selected: false,
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
      selected: true,
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
      selected: false,
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
      selected: false,
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
      selected: true,
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
      selected: false,
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
      selected: false,
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
      selected: false,
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
      selected: false,
    },
  ];

  listSelected = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.listSelected = [];
    if (changes.isModal.currentValue === false) {
      this.listAd.forEach((element) => {
        if (element.selected === true) {
          this.listSelected.push(element);
        }
      });
    } else {
      this.listSelected = this.listAd;
    }
  }

  ngOnInit(): void {}

  activeAd(index) {
    if (this.isModal === true)
      this.listSelected[index].selected = !this.listSelected[index].selected;
  }
}
