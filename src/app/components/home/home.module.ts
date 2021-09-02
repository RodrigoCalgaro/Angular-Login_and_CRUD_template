import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { ProductosAddComponent } from './productos/productos-add/productos-add.component';
import { ProductosDeleteComponent } from './productos/productos-delete/productos-delete.component';
import { ProductosViewComponent } from './productos/productos-view/productos-view.component';
import { ProductosEditComponent } from './productos/productos-edit/productos-edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductosListComponent,
    ProductosAddComponent,
    ProductosDeleteComponent,
    ProductosViewComponent,
    ProductosEditComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
