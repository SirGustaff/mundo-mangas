import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editoras, PublisherPage } from '../../Editora/editoras';
import { EditoraService } from '../../Editora/editora.service';
import { ProdutoService } from '../produto.service';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Categorias } from '../../Categoria/categorias';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productForm: FormGroup;

  publisherPage$: Observable<PublisherPage>

  publisherArray: Array<Editoras> = [];

  publisherTotalPage: number;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private editoraService: EditoraService,
  ) {}

    ngOnInit() {

    this.productForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60),]],
      paginas: [],
      uriFoto: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      dataPublicacao: [],
      preco: [],
      estoque: [],
      ativo: [null, ],
      colorido: [null, ],
      editora: [null, [Validators.required]],
      categorias: []
    })
    
    this.editoraService.get('', 1, 'OrderByNameASC').pipe(
      concatMap(firstPage => {
        this.publisherTotalPage = firstPage.totalPages;
        const pageNumbers = Array.from({length: this.publisherTotalPage}, (_, i) => i + 1);
        return of(...pageNumbers).pipe(
          concatMap(i => this.editoraService.get('', i, 'OrderByNameASC'))
        );
      })
    ).subscribe(page => {
      for (let item of page.items) {
        if (item !== undefined) {
          this.publisherArray.push(item);
        }
      }
      console.log(this.publisherArray);
    });
    
  }

  onSubmit() {
    if(this.productForm.valid) {
      this.produtoService.post(this.productForm.value).subscribe({
        next: data => {
          alert("Produto Adicionado Com Sucesso")
          this.productForm.reset();
        }
      });
    }
  }

}
