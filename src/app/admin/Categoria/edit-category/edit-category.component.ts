import { Component, Input, OnInit } from '@angular/core';
import { Categorias } from '../../../Interfaces/categorias';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  @Input() categoria: Categorias;

  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    private formBuilder: FormBuilder,
    private service: CategoriaService
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.categoria.id],
      nome: [this.categoria.nome,[Validators.required, Validators.minLength(3), Validators.maxLength(60),]]
    })
  }

  updateCategoria() {
    if (this.editForm.valid && this.editForm.valueChanges) {
      this.service.put(this.editForm.value).subscribe({
        next: data => {
          alert('Categoria Atualizada com Sucesso');
          this.dialogRef.close('atualizou');
        },
        error: data => {
          alert(data.detail);
          this.dialogRef.close();
        }
      });
    }
  }
}
