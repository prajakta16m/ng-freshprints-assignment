import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  bootstrap:[AppComponent],
  declarations: [
    AppComponent
  ],
  exports:[AppComponent]
})
export class AppModule { }