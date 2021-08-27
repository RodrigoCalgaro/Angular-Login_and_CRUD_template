import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<Producto[]>{
    //return this.http.get<Producto[]>('/api/productos')
    return this.http.get<Producto[]>('./assets/data/productos.json')
  }  
}
