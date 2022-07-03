import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoneModule } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { environment } from 'src/environments/environment';
import { SortPipe } from './pipe/sort.pipe';
import { ToArrayPipeU } from './pipe/toArrayUp.pipe';
import { toArray } from 'rxjs';
import { ToArrayPipeD } from './pipe/toArrayDown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent, 
    SortPipe,
    ToArrayPipeU,
    ToArrayPipeD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
