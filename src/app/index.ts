import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';
import { Header } from './header/header.component';
import { Main } from './main/main.component';

@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    Header,
    Main,
  ],
  imports: [BrowserModule],
})
export class AppModule {}
