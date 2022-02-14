import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyProjectsComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    MyEducationComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
