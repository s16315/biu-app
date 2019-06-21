import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import {
  MatFormFieldModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatCardModule,
  MatMenuModule, MatDividerModule,
  MatToolbarModule, MatIconModule, MatNativeDateModule, MatOptionModule, MatSlideToggleModule, MatExpansionModule
} from '@angular/material';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoginComponent,
    UserPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
