import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomePageComponent } from './homePage/homePage.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyProfileComponent } from './myProfile/myProfile.component';
import { ProfilesPageComponent } from './profilesPage/profilesPage.component';

@NgModule({
  declarations: [	
    AppComponent,
      HomePageComponent,
      QuestionnaireComponent,
      MyProfileComponent,
      ProfilesPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
