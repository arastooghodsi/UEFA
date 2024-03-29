import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AllMatchesComponent } from './body/all-matches/all-matches.component';
import { FeaturedComponent } from './body/featured/featured.component';
import { RankingsComponent } from './body/rankings/rankings.component';
import { LoginComponent } from './LoginReg/account/login.component';
import { UserComponent } from './LoginReg/user/user.component';
import { RegisterComponent } from './LoginReg/account/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AllMatchesComponent,
    FeaturedComponent,
    RankingsComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
