import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categorias } from './categorias';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categorias: Categorias[];;

  constructor (private service: CategoriaService) {}

  ngOnInit() {
    this.service.list().subscribe(dados => this.categorias = dados);
  }

  
}
