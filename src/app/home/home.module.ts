import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrincipalComponent } from './principal/principal.component';
import { LogsComponent } from './logs/logs.component';
import { AdUnitsComponent } from './ad-units/ad-units.component';
import { PlacementsComponent } from './placements/placements.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent,
    LogsComponent,
    AdUnitsComponent,
    PlacementsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule,
    ColorPickerModule,
  ],
})
export class HomeModule {}
