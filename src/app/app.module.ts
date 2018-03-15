import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageComponent } from './components/page/page.component';

// Routes
import { APP_ROUTES } from './app.routes';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MenuComponent } from './components/menu/menu.component';
import { SecurityModule } from './security/security.module';

// Modules


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageComponent,
    PagenotfoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
