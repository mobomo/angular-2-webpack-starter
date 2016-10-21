import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';

@NgModule({
  bootstrap: [App],
  declarations: [App],
  imports: [BrowserModule],
})
export class AppModule {}
