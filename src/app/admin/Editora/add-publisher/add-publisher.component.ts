import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditoraService } from '../editora.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})

export class AddPublisherComponent implements OnInit{

  editoraForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EditoraService,
  ) {}


  ngOnInit() {
    this.editoraForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60),]],
      uriFoto: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]]
    })
  }

  onSubmit() {
    if(this.editoraForm.valid) {
      this.service.createCategory(this.editoraForm.value).subscribe({
        next: data => {
          alert("Editora Adicionada Com Sucesso")
          this.editoraForm.reset();
        }
      });
    }
  }
}
