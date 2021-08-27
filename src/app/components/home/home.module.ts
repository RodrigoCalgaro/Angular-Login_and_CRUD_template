import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { ProductosAddComponent } from './productos/productos-add/productos-add.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductosListComponent,
    ProductosAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
