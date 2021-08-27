import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductosAddComponent } from './productos/productos-add/productos-add.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, children: [
    { path: 'productos',  component: ProductosListComponent },
    { path: 'productos/add',  component: ProductosAddComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
