import { NgModule } from '@angular/core';
import { RouteReuseStrategy} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHeaderComponent } from './cliente/default-header/default-header.component';
import { MyAccountComponent } from './cliente/my-account/my-account.component';
import { HomeComponent } from './cliente/home/home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './admin/Categoria/add-category/add-category.component';
import { AddPublisherComponent } from './admin/Editora/add-publisher/add-publisher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarCategoriaComponent } from './admin/Categoria/listar-categoria/listar-categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCategoryComponent } from './admin/Categoria/edit-category/edit-category.component';
import { ListarEditoraComponent } from './admin/Editora/listar-editora/listar-editora.component';
import { EditPublisherComponent } from './admin/Editora/edit-publisher/edit-publisher.component';
import { ListarProdutoComponent } from './admin/Produto/listar-produto/listar-produto.component';
import { AddProductComponent } from './admin/Produto/add-product/add-product.component';
import { EditProductComponent } from './admin/Produto/edit-product/edit-product.component';
import { SearchPageComponent } from './cliente/search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultHeaderComponent,
    MyAccountComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminComponent,
    AddCategoryComponent,
    AddPublisherComponent,
    ListarCategoriaComponent,
    EditCategoryComponent,
    ListarEditoraComponent,
    EditPublisherComponent,
    ListarProdutoComponent,
    AddProductComponent,
    EditProductComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
