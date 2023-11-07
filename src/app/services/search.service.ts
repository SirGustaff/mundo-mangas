import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Produtos, ProductsPage } from '../admin/Produto/produtos';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  nome: string;

  constructor(private http: HttpClient) {} 

  private readonly searchProducts = 'http://localhost:8080/produtos/por-nome?'

  get(nome: string, page: number, order: string) {

    let params = new HttpParams();
    params = params.set('nome', nome)
    params = params.set('page', page);
    params = params.set('order', order);
    
    return this.http.get<ProductsPage>(this.searchProducts, { params })
    .pipe(
      tap(console.log)
    );

  }

}
