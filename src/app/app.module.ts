import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule
 } from "igniteui-angular";

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
