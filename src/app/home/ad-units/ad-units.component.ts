import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiAdManagerService } from '../services/api-ad-manager.service';
import { adUnit } from '../model/adUnits';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddParentIdComponent } from 'src/app/shared/modals/add-parent-id/add-parent-id.component';

@Component({
  selector: 'app-ad-units',
  templateUrl: './ad-units.component.html',
  styleUrls: ['./ad-units.component.scss'],
})
export class AdUnitsComponent implements OnInit {
  isVisible: boolean;
  switchValue: boolean;
  isAddAdUnits: boolean;
  listTargetWindow: any;
  listStatus: any;
  listSmartSize: any;
  listAdSense: any;
  listAdType: any;
  listBorderStyle: any;
  listFontFamily: any;
  listFontSize: any;
  listMobile: any;
  listAdSenseSource;
  listAdSize: any;
  listAdSizeTemp: any;
  listAdSizeCompleta: any;
  createAd: boolean = false;
  radioValue = 'A';

  detailsAdUnit: adUnit;
  color = 'red';

  current = 0;

  index = 'First-content';

  formAdSS: FormGroup;
  formAdSSCreate: FormGroup;
  formAdUnit: FormGroup;
  formCreateAdUnit: FormGroup;

  listAdUnit: adUnit;

  height_calculate: any = 0;

  cleanSearch: boolean;

  constructor(
    public fb: FormBuilder,
    public apiAdManager: ApiAdManagerService,
    private modalService: NzModalService
  ) {
    this.formAdUnit = this.fb.group({
      targetWindow: [''],
      name: [''],
      status: [''],
      description: [''],
      smartSize: [''],
      adSenseSettingsSource: [''],
      parentId: [''],
    });

    this.formCreateAdUnit = this.fb.group({
      targetWindow: [''],
      name: [''],
      status: [''],
      description: [''],
      smartSize: [''],
      adSenseSettingsSource: [''],
      parentId: [''],
    });

    this.formAdSS = this.fb.group({
      borderColor: [''],
      adSenseEnabled: [''],
      titleColor: [''],
      adType: [''],
      backgroundColor: [''],
      borderStyle: [''],
      textColor: [''],
      fontFamily: [''],
      urlColor: [''],
      fontSize: [''],
    });

    this.formAdSSCreate = this.fb.group({
      borderColor: [''],
      adSenseEnabled: [''],
      titleColor: [''],
      adType: [''],
      backgroundColor: [''],
      borderStyle: [''],
      textColor: [''],
      fontFamily: [''],
      urlColor: [''],
      fontSize: [''],
    });
  }

  get f() {
    return this.formAdSS.controls;
  }

  get fCreateAd() {
    return this.formAdSSCreate.controls;
  }

  get fAdUnit() {
    return this.formAdUnit.controls;
  }

  get fAdUnitCreate() {
    return this.formCreateAdUnit.controls;
  }

  ngOnInit(): void {
    this.loadData();

    this.apiAdManager.parentId.subscribe((resp) => {
      this.fAdUnitCreate.parentId.setValue(resp.id);
    });
  }

  ngAfterViewChecked(): void {
    this.height_calculate = document.getElementById('heigth')?.clientHeight;
    // console.log(this.height_calculate);

    // debugger;
  }

  loadData() {
    this.apiAdManager.networkMain().subscribe(
      (resp) => {
        console.log(resp);
        this.fAdUnitCreate.parentId.setValue(resp.message.rootadunit);
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiAdManager.listAdUnits().subscribe(
      (resp) => {
        console.log(resp);
        this.listAdUnit = resp.message;
      },
      (error) => {
        console.log(error);
      }
    );

    this.apiAdManager.adUnitsConfig().subscribe(
      (resp) => {
        console.log('carga la data general', resp);
        this.listAdSense = resp.message.adSenseEnabled;
        this.listTargetWindow = resp.message.targetWindow;
        this.listStatus = resp.message.status;
        this.listAdSenseSource = resp.message.adSenseSettingsSource;
        this.listSmartSize = resp.message.smartSizeMode;
        this.listAdType = resp.message.adType;
        this.listBorderStyle = resp.message.borderStyle;
        this.listFontFamily = resp.message.fontFamily;
        this.listFontSize = resp.message.fontSize;
        this.listMobile = resp.message.mobileApps.results;
        this.listAdSizeCompleta = resp.message.adUnitSizes;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  recivedDataMobile(data) {
    console.log(data);
  }

  initForm(data) {
    this.f.adSenseEnabled.setValue(data.adSenseEnabled.toString());
    this.f.adType.setValue(data.adType);
    this.f.backgroundColor.setValue('#' + data.backgroundColor);
    this.f.borderColor.setValue('#' + data.borderColor);
    this.f.borderStyle.setValue(data.borderStyle);
    this.f.fontFamily.setValue(data.fontFamily);
    this.f.fontSize.setValue(data.fontSize);
    this.f.textColor.setValue('#' + data.textColor);
    this.f.titleColor.setValue('#' + data.titleColor);
    this.f.urlColor.setValue('#' + data.urlColor);

    if (this.fAdUnit.adSenseSettingsSource.value === 'PARENT') {
      this.formAdSS.disable();
    }
  }

  initFormCreateAd() {
    this.fCreateAd.adSenseEnabled.setValue('false');
    this.fCreateAd.adType.setValue('TEXT');
    this.fCreateAd.backgroundColor.setValue('#' + 'FFFFFF');
    this.fCreateAd.borderColor.setValue('#' + 'FFFFFF');
    this.fCreateAd.borderStyle.setValue('DEFAULT');
    this.fCreateAd.fontFamily.setValue('DEFAULT');
    this.fCreateAd.fontSize.setValue('DEFAULT');
    this.fCreateAd.textColor.setValue('#' + 'FFFFFF');
    this.fCreateAd.titleColor.setValue('#' + 'FFFFFF');
    this.fCreateAd.urlColor.setValue('#' + 'FFFFFF');

    if (this.fAdUnitCreate.adSenseSettingsSource.value === 'PARENT') {
      this.formAdSSCreate.disable();
    }
  }

  adSSSChange(e) {
    if (this.fAdUnit.adSenseSettingsSource.value === 'PARENT') {
      this.formAdSS.disable();
    } else {
      this.formAdSS.enable();
    }
  }

  adSSSCreateChange(e) {
    if (this.fAdUnitCreate.adSenseSettingsSource.value === 'PARENT') {
      this.formAdSSCreate.disable();
    } else {
      this.formAdSSCreate.enable();
    }
  }

  pickColor(color, control) {
    this.f[control].setValue(color);
  }

  pickColorCreate(color, control) {
    this.fCreateAd[control].setValue(color);
  }

  closeModal(e) {
    this.isVisible = e;
  }

  closeModal2() {
    this.isVisible = false;
  }

  changeData(data) {
    this.listAdSize = data;
  }

  //Create AdUnits
  createAdUnit() {
    this.createAd = true;
    this.current = 0;
    this.listAdSizeTemp = this.listAdSize;
    this.listAdSize = [];
    this.isAddAdUnits = true;
    this.initFormCreateAdUnit();
    this.initFormCreateAd();
  }

  cancelAddAdUnit() {
    this.listAdSize = this.listAdSizeTemp;
    this.isAddAdUnits = false;
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    //DATA DEL FORMULARIO
    console.log(this.formAdSS.value);
    this.current += 1;
    this.changeContent();
  }

  doneCreate() {
    this.listMobile.forEach((element) => {
      delete element.selected;
    });

    this.listAdSize.forEach((element) => {
      delete element.selected;
    });

    if (this.fCreateAd.adSenseEnabled.value === 'false') {
      this.fCreateAd.adSenseEnabled.setValue(false);
    }

    if (this.fCreateAd.adSenseEnabled.value === 'true') {
      this.fCreateAd.adSenseEnabled.setValue(true);
    }

    console.log(this.formCreateAdUnit.value);
    console.log(this.formAdSSCreate.value);
    console.log(this.listAdSize);
    console.log(this.listMobile);
    console.log(this.detailsAdUnit);

    const stylesWhitoutInit = {};
    const propsForRemove = [
      'backgroundColor',
      'borderColor',
      'textColor',
      'titleColor',
      'urlColor',
    ];
    const stylesArray = Object.entries(this.formAdSSCreate.value);
    stylesArray.map(([key, value]) => {
      if (propsForRemove.includes(key)) {
        stylesWhitoutInit[key] = (value as string).replace('#', '');
      } else stylesWhitoutInit[key] = value;
    });

    // console.log(stylesWhitoutInit, 'perreo');

    let adUnitSizes = {
      adUnitSizes: this.listAdSize,
    };

    let adSenseSettings = {
      adSenseSettings: stylesWhitoutInit,
    };

    let body = {
      ...this.detailsAdUnit,
      ...this.formCreateAdUnit.value,
      ...adUnitSizes,
      ...adSenseSettings,
    };

    body.id = null;

    // console.log(body);
    // debugger;

    let data = [];

    data.push(body);
    // debugger;

    this.apiAdManager.editarAdUnit(data).subscribe(
      (resp) => {
        console.log(resp);

        this.apiAdManager.listAdUnits().subscribe(
          (resp) => {
            console.log(resp);
            this.listAdUnit = resp.message;
            this.isAddAdUnits = false;
            this.current = 0;
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  done(): void {
    this.listMobile.forEach((element) => {
      delete element.selected;
    });

    this.listAdSize.forEach((element) => {
      delete element.selected;
    });

    if (this.f.adSenseEnabled.value === 'false') {
      this.f.adSenseEnabled.setValue(false);
    }

    if (this.f.adSenseEnabled.value === 'true') {
      this.f.adSenseEnabled.setValue(true);
    }

    console.log(this.formAdUnit.value);
    console.log(this.formAdSS.value);
    console.log(this.listAdSize);
    console.log(this.listMobile);
    console.log(this.detailsAdUnit);

    const stylesWhitoutInit = {};
    const propsForRemove = [
      'backgroundColor',
      'borderColor',
      'textColor',
      'titleColor',
      'urlColor',
    ];
    const stylesArray = Object.entries(this.formAdSS.value);
    stylesArray.map(([key, value]) => {
      if (propsForRemove.includes(key)) {
        stylesWhitoutInit[key] = (value as string).replace('#', '');
      } else stylesWhitoutInit[key] = value;
    });

    // console.log(stylesWhitoutInit, 'perreo');

    let adUnitSizes = {
      adUnitSizes: this.listAdSize,
    };

    let adSenseSettings = {
      adSenseSettings: stylesWhitoutInit,
    };

    let body = {
      ...this.detailsAdUnit,
      ...this.formAdUnit.value,
      ...adUnitSizes,
      ...adSenseSettings,
    };

    // console.log(body);
    // debugger;

    let data = [];

    data.push(body);
    // debugger;

    this.apiAdManager.editarAdUnit(data).subscribe(
      (resp) => {
        console.log(resp);
        this.apiAdManager.listAdUnits().subscribe(
          (resp) => {
            console.log(resp);
            this.listAdUnit = resp.message;
            this.isAddAdUnits = false;
            this.current = 0;
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editAdUnitSize() {
    this.isVisible = true;
    console.log('entro');
  }

  addAdUnitSize() {
    this.isVisible = true;
  }

  recivedAdUnit(data) {
    console.log(data);
    this.apiAdManager.detailsAdUnit(data).subscribe(
      (resp) => {
        this.current = 0;
        console.log(resp);
        this.isAddAdUnits = false;
        this.detailsAdUnit = resp.message[0];
        this.initFormAdUnit(this.detailsAdUnit);
        this.initForm(resp.message[0].adSenseSettings);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  initFormAdUnit(data) {
    this.fAdUnit.name.setValue(data.name);
    this.fAdUnit.targetWindow.setValue(data.targetWindow);
    this.fAdUnit.status.setValue(data.status);
    this.fAdUnit.description.setValue(data.description);
    this.fAdUnit.parentId.setValue(data.parentId);
    this.fAdUnit.parentId.disable();
    this.fAdUnit.smartSize.setValue(data.smartSizeMode);
    this.fAdUnit.adSenseSettingsSource.setValue(data.adSenseSettingsSource);
    this.listAdSize = data.adUnitSizes;
  }

  initFormCreateAdUnit() {
    this.fAdUnitCreate.targetWindow.setValue('BLANK');
    this.fAdUnitCreate.status.setValue('ACTIVE');
    this.fAdUnitCreate.description.setValue('');
    this.fAdUnitCreate.name.setValue('');
    this.fAdUnitCreate.parentId.disable();
    this.fAdUnitCreate.smartSize.setValue('NONE');
    this.fAdUnitCreate.adSenseSettingsSource.setValue('PARENT');
  }

  addParentId() {
    this.modalService.create({
      nzMaskClosable: true,
      nzCancelText: null,
      nzOkText: null,
      nzClosable: false,
      nzFooter: null,
      nzStyle: { top: '20px' },
      nzWidth: 900,
      nzContent: AddParentIdComponent,
    });
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  filterButton(filter) {
    let body = {
      status: filter,
    };
    this.apiAdManager.filterListAdUnits(body).subscribe(
      (resp) => {
        console.log(resp);
        this.listAdUnit = resp.message;
        this.cleanSearch = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  recivedSearch(data) {
    this.cleanSearch = data.reset;
    var body;
    var regex = /^[0-9]+$/;
    if (data.search.match(regex)) {
      body = {
        id: {
          $regex: data.search,
          $options: 'i',
        },
      };
    } else {
      body = {
        name: {
          $regex: data.search,
          $options: 'i',
        },
      };
    }

    this.apiAdManager.filterListAdUnits(body).subscribe(
      (resp) => {
        console.log(resp);
        this.listAdUnit = resp.message;
        this.cleanSearch = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  detectKey(e) {
    this.cleanSearch = e;
  }
}
