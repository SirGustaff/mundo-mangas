import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from './categorias';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly url = 'http://localhost:8080/categorias';

  constructor(
    private http: HttpClient,
  ) {}

  getCategory(order: string, page: number) {

    let params = new HttpParams();
    params = params.set('page', page);
    params = params.set('order', order);
    
  
    return this.http.get<Categorias[]>(this.url, { params })
    .pipe(
      tap(console.log)
    );
  }
}
