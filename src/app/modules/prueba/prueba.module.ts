import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba.routing';
import { PruebaComponent } from './prueba.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
