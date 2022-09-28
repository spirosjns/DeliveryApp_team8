import { UserhomeComponent } from './userhome/userhome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { StoresComponent } from './stores/stores.component';
import { AuthGuard } from './services/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'stores', component: StoresComponent},
  { path: 'menu/:name', component: MenuComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'userhome', component: UserhomeComponent},
  { path: 'cart/:name/:cost', component: CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
