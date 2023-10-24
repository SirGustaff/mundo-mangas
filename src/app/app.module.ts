import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HomeComponent } from './home/home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './admin/Categoria/add-category/add-category.component';
import { AddPublisherComponent } from './admin/add-publisher/add-publisher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarCategoriaComponent } from './admin/Categoria/listar-categoria/listar-categoria.component';
import { HttpClientModule } from '@angular/common/http';


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
    ListarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
