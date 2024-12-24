import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

NgModule({
  declarations:[
  AppComponent,
  HomeComponent
  ],
  imports:[
    RouterLink
  ],})


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
