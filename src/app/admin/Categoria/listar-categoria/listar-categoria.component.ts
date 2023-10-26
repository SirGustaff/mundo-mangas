import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categorias } from './categorias';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categorias: Categorias[];

  categorias$: Observable<Categorias[]>;

  orderParam: FormGroup;

  constructor (
      private service: CategoriaService,
      private formBuilder: FormBuilder,
  ) {
    this.orderParam = this.formBuilder.group({
      order: '',
    })
  }

  ngOnInit() {
    let order = this.orderParam.get('order')?.value

    this.categorias$ = this.service.getCategory(order)
    
  }

  submitParams() {

    let order = this.orderParam.get('order')?.value

    this.categorias$ = this.service.getCategory(order)
    console.log(order)
  }

  

}
