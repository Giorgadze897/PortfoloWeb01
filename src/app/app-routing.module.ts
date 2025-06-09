import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WatchesComponent } from './watches/watches.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistracionComponent } from './registracion/registracion.component';
import { CheckutComponent } from './checkut/checkut.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'search',component:SearchResultsComponent },
  {path:'cart',component:CartComponent},
  {path:'product/:id',component:ProductDetailComponent},
  {path:'watches',component:WatchesComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistracionComponent},
  {path:'checkout',component:CheckutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
