import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.css']
})
export class ProductosViewComponent implements OnInit {
  
  id: number = 0;
  producto!: Producto

  constructor(private productosService: ProductosService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => this.id = data.id)

    this.productosService.get(this.id).subscribe(res => {
      if (res.success){
        this.producto = res.dataValues
      }
    })
  }

}
