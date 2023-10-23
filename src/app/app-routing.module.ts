import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './admin/Categoria/add-category/add-category.component';
import { AddPublisherComponent } from './admin/Categoria/add-publisher/add-publisher.component';
import { ListarCategoriaComponent } from './admin/Categoria/listar-categoria/listar-categoria.component';

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
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'list-category',
        component: ListarCategoriaComponent
      },
      {
        path: 'add-publisher',
        component: AddPublisherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
