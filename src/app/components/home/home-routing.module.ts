import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductosAddComponent } from './productos/productos-add/productos-add.component';
import { ProductosEditComponent } from './productos/productos-edit/productos-edit.component';
import { ProductosListComponent } from './productos/productos-list/productos-list.component';
import { ProductosViewComponent } from './productos/productos-view/productos-view.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, children: [
    { path: 'productos',  component: ProductosListComponent },
    { path: 'productos/add',  component: ProductosAddComponent },
    { path: 'productos/edit/:id',  component: ProductosEditComponent },
    { path: 'productos/view/:id',  component: ProductosViewComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
