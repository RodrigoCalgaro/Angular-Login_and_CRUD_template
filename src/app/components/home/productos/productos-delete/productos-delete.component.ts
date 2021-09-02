import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-productos-delete',
  templateUrl: './productos-delete.component.html',
  styleUrls: ['./productos-delete.component.css']
})
export class ProductosDeleteComponent  {

  constructor(public dialogRef: MatDialogRef<ProductosDeleteComponent>, 
    private productosService: ProductosService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.productosService.delete(this.data.id).subscribe(res => {
      if (res.success){
          this.dialogRef.close();
        }
    })
  }
}