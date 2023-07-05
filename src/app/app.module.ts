import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//locale config
import localeEsAR from '@angular/common/locales/es-AR';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsAR);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
