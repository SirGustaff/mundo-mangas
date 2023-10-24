import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from './categorias';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = 'http://localhost:8080/categorias?page=1&order=asc';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Categorias[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
