import { Component, OnInit } from '@angular/core';
import { ProductsPage } from 'src/app/Interfaces/produtos';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  productsPage$: Observable<ProductsPage>;

  params: FormGroup = this.formBuilder.group({
    nome: [this.searchService.nome],
    page: [1],
    order: ['OrderByNameASC']
  })

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.productsPage$ = this.getProducts();
  }

  getProducts() {
    return this.searchService.get(this.searchService.nome, this.params.get('page')?.value, this.params.get('order')?.value);
  }

  onChangePage() {
    this.productsPage$ = this.getProducts();
  }

  selectOrder() {
    this.productsPage$ = this.getProducts();
  }

  showDetails(id: number) {
    this.searchService.id = id;
    this.router.navigate([`details/${id}`])
  }

}
