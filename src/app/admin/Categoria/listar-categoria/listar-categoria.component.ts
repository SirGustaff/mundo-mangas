import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categorias } from '../categorias';
import { Observable, isEmpty, map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categorias: Categorias[];

  categorias$: Observable<Categorias[]>;

  params: FormGroup = this.formBuilder.group({
    order: new FormControl('dsc'),
    page: new FormControl(),
    nome: new FormControl(''),
  })


  page: number = 1;

  constructor(
    private service: CategoriaService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.categorias$ = this.getCategory();
  }

  getCategory() {
    return this.service.getCategory(this.params.get('nome')?.value, this.page, this.params.get('order')?.value);
  }

  selectOrder() {
    this.categorias$ = this.getCategory();
  }

  previousPage() {
    if (this.page - 1 >= 1) {
      this.page -= 1;
      this.categorias$ = this.getCategory();
    }
  }

  nextPage() {
    this.service.getCategory(this.params.get('nome')?.value, this.page + 1, this.params.controls['order']?.value).pipe(
      map(array => array.length === 0)
    ).subscribe((empty: boolean) => {
      if (empty) {
        console.log(empty)
      } else {
        this.page += 1;
        this.categorias$ = this.getCategory()
      }
    });
  }

  onSearch() {
    this.categorias$ = this.getCategory()
  }

  onEdit(id: number) {

  }

}
