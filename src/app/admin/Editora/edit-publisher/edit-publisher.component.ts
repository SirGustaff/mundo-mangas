import { Component, Input, OnInit } from '@angular/core';
import { Editoras } from '../editoras';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditoraService } from '../editora.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent implements OnInit {

  @Input() editora: Editoras;

  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditPublisherComponent>,
    private formBuilder: FormBuilder,
    private service: EditoraService
  ) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [this.editora.id],
      nome: [this.editora.nome,[Validators.required, Validators.minLength(3), Validators.maxLength(60),]],
      uriFoto: [this.editora.uriFoto, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]]
    })
  }

  updateCategoria() {
    if (this.editForm.valid) {
      this.service.editCategory(this.editForm.value).subscribe();
    }
    this.dialogRef.close();
  }
}
