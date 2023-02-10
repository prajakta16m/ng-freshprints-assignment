import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  exports:[AppComponent]
})
export class AppModule { }