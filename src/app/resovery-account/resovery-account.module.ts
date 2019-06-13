import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResoveryAccountPage } from './resovery-account.page';

const routes: Routes = [
  {
    path: '',
    component: ResoveryAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResoveryAccountPage]
})
export class ResoveryAccountPageModule {}
