import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule, AppRoutingModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  exports: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
