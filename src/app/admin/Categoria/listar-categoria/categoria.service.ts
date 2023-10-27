import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from './categorias';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly url = 'http://localhost:8080/categorias/por-nome';

  constructor(
    private http: HttpClient,
  ) {}

  getCategory(nome: string, page: number, order: string) {

    let params = new HttpParams();
    params = params.set('nome', nome)
    params = params.set('page', page);
    params = params.set('order', order);
    
  
    return this.http.get<Categorias[]>(this.url, { params })
    .pipe(
      tap(console.log)
    );
  }
}
