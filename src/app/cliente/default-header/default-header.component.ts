import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent implements OnInit {


  constructor(
    private router: Router, 
    private searchService: SearchService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
      
  }

  submitSearch(searchInput : string) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
    this.searchService.nome = searchInput;

    this.router.navigate([`search/${searchInput}`]);

  }

  isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  logout() {
    this.userAuthService.clear();
    this.router.navigate(['']);
  }

}
