import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ShopindexComponent } from './shopindex/shopindex.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [
   // AppComponent,
    HomeComponent,
    ShopindexComponent,
    CatalogueComponent,
    KidsComponent,
    MensComponent,
    WomensComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: [ShopindexComponent]
})
export class AppModule { }
