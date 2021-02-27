import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';

import { MenComponent } from './men/men.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SiteComponent } from './site/site.component';
import { WatchesComponent } from './watches/watches.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path:'Profile',
    component:ProfileComponent
  },
  {
    path:'',
    component:SignupComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'men',
    component:MenComponent
  },
  {
    path:'site',
    component:SiteComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'women',
    component:WomenComponent
  },
  {
    path:'watches',
    component:WatchesComponent
  },
  {
    path:'history',
    component:HistoryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
