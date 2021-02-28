import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';

import { CartComponent } from './cart/cart.component';
import { SiteComponent } from './site/site.component';
import { ProductComponent } from './product/product.component';
import { WomenComponent } from './women/women.component';
import { WatchesComponent } from './watches/watches.component';
import { HistoryComponent } from './history/history.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SignupComponent,
    LoginComponent,
    MenComponent,
    CartComponent,
    SiteComponent,
    ProductComponent,
    WomenComponent,
    WatchesComponent,
    HistoryComponent,
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy,
       useClass: IonicRouteStrategy 
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
