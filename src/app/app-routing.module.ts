import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cliente/home/home.component';
import { MyAccountComponent } from './cliente/my-account/my-account.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './admin/Categoria/add-category/add-category.component';
import { AddPublisherComponent } from './admin/Editora/add-publisher/add-publisher.component';
import { ListarCategoriaComponent } from './admin/Categoria/listar-categoria/listar-categoria.component';
import { ListarEditoraComponent } from './admin/Editora/listar-editora/listar-editora.component';
import { ListarProdutoComponent } from './admin/Produto/listar-produto/listar-produto.component';
import { AddProductComponent } from './admin/Produto/add-product/add-product.component';
import { SearchPageComponent } from './cliente/search-page/search-page.component';
import { DetailsComponent } from './cliente/product-details/details.component';
import { LoginComponent } from './cliente/login/login.component';
import { NewAccountComponent } from './cliente/new-account/new-account.component';
import { CartComponent } from './cliente/cart/cart.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'search/:search',
    component: SearchPageComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new-account',
    component: NewAccountComponent
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'category',
        component: ListarCategoriaComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'publisher',
        component: ListarEditoraComponent
      },
      {
        path: 'add-publisher',
        component: AddPublisherComponent
      },
      {
        path: 'product',
        component: ListarProdutoComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
