import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from './categorias';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly urlGet = 'http://localhost:8080/categorias/por-nome';

  private readonly urlPost = 'http://localhost:8080/categorias';

  constructor(
    private http: HttpClient,
  ) {}

  getCategory(nome: string, page: number, order: string) {

    let params = new HttpParams();
    params = params.set('nome', nome)
    params = params.set('page', page);
    params = params.set('order', order);
    
  
    return this.http.get<Categorias[]>(this.urlGet, { params })
    .pipe(
      tap(console.log)
    );
  }

  createCategory(categoria: any) {
    return this.http.post(this.urlPost, categoria).pipe(take(1));
  }
}
