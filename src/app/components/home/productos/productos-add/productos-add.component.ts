import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.component.html',
  styleUrls: ['./productos-add.component.css']
})
export class ProductosAddComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private productosService: ProductosService, private router: Router) { 
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      proveedor: ['', Validators.required],
    })
  }

  agregar(): void {
    this.productosService.add(this.form.value).subscribe(res => {
      if (res.success){
          this.router.navigate(['home/productos'])
      }
    })
  }  
}
