import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './admin/Categoria/add-category/add-category.component';
import { AddPublisherComponent } from './admin/Editora/add-publisher/add-publisher.component';
import { ListarCategoriaComponent } from './admin/Categoria/listar-categoria/listar-categoria.component';
import { ListarEditoraComponent } from './admin/Editora/listar-editora/listar-editora.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
