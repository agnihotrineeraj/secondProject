import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatModule} from  '../app/mat/mat.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputformComponent } from './inputform/inputform.component';
import { DisplayComponent } from './display/display.component';
import {FormsModule} from  '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
