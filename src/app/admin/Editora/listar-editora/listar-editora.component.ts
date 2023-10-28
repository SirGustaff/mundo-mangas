import { Component, OnInit } from '@angular/core';
import { EditoraService } from '../editora.service';
import { Editoras } from '../editoras';
import { Observable, isEmpty, map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditPublisherComponent } from '../edit-publisher/edit-publisher.component';

@Component({
  selector: 'app-listar-editora',
  templateUrl: './listar-editora.component.html',
  styleUrls: ['./listar-editora.component.css']
})

export class ListarEditoraComponent implements OnInit {

  editoras: Editoras[];

  editoras$: Observable<Editoras[]>;

  params: FormGroup = this.formBuilder.group({
    order: new FormControl('dsc'),
    page: new FormControl(),
    nome: new FormControl(''),
  })


  page: number = 1;

  constructor(
    private dialog: MatDialog,
    private service: EditoraService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.editoras$ = this.getPublisher();
  }

  getPublisher() {
    return this.service.getCategory(this.params.get('nome')?.value, this.page, this.params.get('order')?.value);
  }

  selectOrder() {
    this.editoras$ = this.getPublisher();
  }

  previousPage() {
    if (this.page - 1 >= 1) {
      this.page -= 1;
      this.editoras$ = this.getPublisher();
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
        this.editoras$ = this.getPublisher()
      }
    });
  }

  onSearch() {
    this.editoras$ = this.getPublisher()
  }

  onEdit(editora: Editoras) {

    const dialogRef = this.dialog.open(EditPublisherComponent)

    dialogRef.componentInstance.editora = editora;

    dialogRef.afterClosed().subscribe({
      next: data => {
        alert("Categoria atualizada com sucesso");
        this.editoras$ = this.getPublisher();
      },
    });
  }

  onDelete(id: number) {
    this.service.deleteCategory(id).subscribe({
      next: data => {
        alert("Editora deletada com sucesso");
        this.editoras$ = this.getPublisher();
      },
      error: error => {
        alert(error.error.detail);
      }
    });
  }
}
