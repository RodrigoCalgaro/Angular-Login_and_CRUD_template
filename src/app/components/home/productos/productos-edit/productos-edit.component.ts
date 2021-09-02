import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {
  id: number = 0;
  producto!: Producto;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => this.id = data.id)

    this.productosService.get(this.id).subscribe(res => {
      if (res.success) {
        this.form = this.fb.group({
          codigo: [res.dataValues.codigo, Validators.required],
          nombre: [res.dataValues.nombre, Validators.required],
          marca: [res.dataValues.marca, Validators.required],
          proveedor: [res.dataValues.proveedor, Validators.required],
        })
      }
    })
  }

  update(): void {
    this.productosService.update(this.id, this.form.value).subscribe(res => {
      if (res.success) {
        this.router.navigate(['home/productos'])
      }
    })
  }
}
