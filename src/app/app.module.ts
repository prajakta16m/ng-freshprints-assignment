import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, HistoryComponent],
  exports: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
