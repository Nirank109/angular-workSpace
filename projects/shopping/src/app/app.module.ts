// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
@NgModule({
  imports: [
    BrowserModule,
   FormsModule
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
    ChildComponent
  ],
  bootstrap: [ParentComponent], // Add your root component here
})
export class AppModule {}
