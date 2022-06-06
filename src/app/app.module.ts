import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpledemoComponent } from './components/simpledemo/simpledemo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LightboxDirective } from './Model/lightbox.directive';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PageBotFoundComponent } from './components/page-bot-found/page-bot-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/details/details.component';

import { HttpClientModule } from '@angular/common/http';
import { TestService } from './Services/test.service';

let routes:Routes=[
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:SimpledemoComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"details",component:DetailsComponent},
  {path:"details/profile/:id",component:ProfileComponent},
  {path:"**",component:PageBotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SimpledemoComponent,
    NavbarComponent,
    FooterComponent,
    LightboxDirective,
    LoginComponent,
    PageBotFoundComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,ReactiveFormsModule

  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
