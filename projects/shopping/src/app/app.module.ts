// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.componet';
import { RegisterComponent } from './components/register/register.component';
import { NetflixindexComponent } from './NetflixWebsite/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './NetflixWebsite/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './NetflixWebsite/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './NetflixWebsite/netflixregister/netflixregister.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IfDemoComponent } from './components/if-demo/if-demo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './OnlineShopping/shoppingcart/shoppingcart.component';
import { ForpropertiesComponent } from './components/forproperties/forproperties/forproperties.component';
import { NgstyledemoComponent } from './components/ngstyledemo/ngstyledemo.component';
import { EventdemoComponent } from './components/eventdemo/eventdemo.component';
import { ParentComponent } from './closure/parent/parent.component';
import { ChildComponent } from './closure/child/child.component';
import { ProductsComponent } from './customEvent/products/products.component';
import { FilterComponent } from './customEvent/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicedemoComponent } from './components/servicedemo/servicedemo.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactivedemoComponent } from './components/reactivedemo/reactivedemo.component';
@NgModule({
  imports: [
    BrowserModule,
   FormsModule,
   HttpClientModule, 
   ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    IfDemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    ForpropertiesComponent,
    NgstyledemoComponent,
    EventdemoComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    FilterComponent,
    ServicedemoComponent,
    TemplateformComponent,
    ReactivedemoComponent
  ],
  bootstrap: [ReactivedemoComponent], // Add your root component here
})
export class AppModule {}
