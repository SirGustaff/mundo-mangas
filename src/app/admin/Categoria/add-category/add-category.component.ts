import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  categoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CategoriaService,
  ) {}


  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60),]],
    })
  }

  onSubmit() {
    if(this.categoryForm.valid) {
      this.service.createCategory(this.categoryForm.value).subscribe();
      this.categoryForm.reset();
    }
  }
}
