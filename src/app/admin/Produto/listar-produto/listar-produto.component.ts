import { Component, OnInit} from '@angular/core';
import { Produtos, ProductsPage } from '../produtos'
import { Observable, map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

    productsPage$: Observable<ProductsPage>;

    params: FormGroup = this.formBuilder.group({
        order: new FormControl(''),
        page: new FormControl(1),
        nome: new FormControl(''),
      })
    
      constructor(
        private dialog: MatDialog,
        private service: ProdutoService,
        private formBuilder: FormBuilder,
      ) { }
    
      ngOnInit() {
        this.productsPage$ = this.getProduct();
      }
    
      getProduct() {
        return this.service.get(this.params.get('nome')?.value, this.params.get('page')?.value, this.params.get('order')?.value);
      }
    
      selectOrder() {
        this.productsPage$ = this.getProduct();
      }
    
      onChangePage() {
        this.productsPage$ = this.getProduct();
      }

      onSearch() {
        this.productsPage$ = this.getProduct()
      }

}
