import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { Categorias, CategoryPage } from '../../../Interfaces/categorias';
import { Observable, Unsubscribable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categoryPage$: Observable<CategoryPage>;

  params: FormGroup = this.formBuilder.group({
    order: new FormControl(''),
    page: new FormControl(1),
    nome: new FormControl(''),
  })

  constructor(
    private dialog: MatDialog,
    private service: CategoriaService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.categoryPage$ = this.getCategory();
  }

  getCategory() {
    return this.service.get(this.params.get('nome')?.value, this.params.get('page')?.value, this.params.get('order')?.value);
  }

  selectOrder() {
    this.categoryPage$ = this.getCategory();
  }

  onChangePage() {
    this.categoryPage$ = this.getCategory();
  }

  onSearch() {
    this.categoryPage$ = this.getCategory()
  }

  onEdit(categoria: Categorias) {

    const dialogRef = this.dialog.open(EditCategoryComponent)

    dialogRef.componentInstance.categoria = categoria;

    dialogRef.afterClosed().subscribe({
      next: data => {
        if(data == 'atualizou')
          this.categoryPage$ = this.getCategory();
      },
    });
  }

  onDelete(id: number) {
    this.service.delete(id).subscribe({
      next: data => {
        alert("Categoria deletada com sucesso");
        this.categoryPage$ = this.getCategory();
      },
      error: error => {
        alert(error.error.detail);
      }
    });
  }

}
