import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdUnitsComponent } from './ad-units/ad-units.component';
import { HomeComponent } from './home.component';
import { LogsComponent } from './logs/logs.component';
import { PlacementsComponent } from './placements/placements.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'principal',
      },
      {
        path: 'principal',
        component: PrincipalComponent,
      },

      {
        path: 'placements',
        component: PlacementsComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      {
        path: 'adUnits',
        component: AdUnitsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
