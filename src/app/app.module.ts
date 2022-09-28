import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ProductsComponent } from './products/products.component';
=======
>>>>>>> def8f53ff16584193d216ba1027698a15e136ced
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductsComponent,
=======
>>>>>>> def8f53ff16584193d216ba1027698a15e136ced
    HomeComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    UserhomeComponent,
    RegisterComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
