import { Component, Input, OnInit } from '@angular/core';
import { Editoras } from '../../../Interfaces/editoras';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditoraService } from '../../../services/editora.service';
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

  updatePublisher() {
    if (this.editForm.valid && this.editForm.valueChanges) {

      this.service.put(this.editForm.value).subscribe({
        next: data => {
          alert('Editora Atualizada com Sucesso');
          this.dialogRef.close('atualizou');
        },
        error: data => {
          alert(data.detail)
          this.dialogRef.close();
        }
      });
    }
  }
}
