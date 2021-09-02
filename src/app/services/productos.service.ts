import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/productos`)
  }


  get(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/productos/${id}`)
  }

  add(producto: Producto): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/productos`, producto)
  }

  update(id: number, producto: Producto): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/productos/${id}`, producto)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/productos/${id}`)
  }
}
