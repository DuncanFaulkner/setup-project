import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

const APPMODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  MaterialModule,
];
@NgModule({
  declarations: [AppComponent],
  imports: [...APPMODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
