import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosDeleteComponent } from '../productos-delete/productos-delete.component';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})

export class ProductosListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'marca', 'proveedor', 'actions'];
  dataSource!: MatTableDataSource<Producto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productosService: ProductosService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.productosService.getAll().subscribe(res => {
      if(res.success) {
        this.dataSource = new MatTableDataSource<Producto>(res.productos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDeleteDialog(productoId: number): void {
    const dialogRef = this.dialog.open(ProductosDeleteComponent, {
      width: '350px',
      data: {
        id: productoId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

}