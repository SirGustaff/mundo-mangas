import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent {


  constructor(private router: Router, private searchService: SearchService) {}

  submitSearch(searchInput : string) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
    this.searchService.nome = searchInput;

    this.router.navigate([`search/${searchInput}`]);

  }

}
