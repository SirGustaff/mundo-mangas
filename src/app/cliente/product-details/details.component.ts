import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Produtos } from 'src/app/Interfaces/produtos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  produto$: Observable<Produtos>;

  constructor(
    private service: SearchService
  ) {}

  ngOnInit() {

    this.produto$ = this.service.getById(this.service.id);
      
  }

}
