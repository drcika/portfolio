import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment.prod';

import { MatTabsModule, MatDialogModule } from '@angular/material';
import { InputsModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ContactComponent } from './home/contact/contact.component';
import { MessageComponent } from './home/contact/message.component';
import { SharedService } from './home/shared.service';
import { AnimationsService } from './animations.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SharedService, AnimationsService],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent],
})
export class AppModule { }
