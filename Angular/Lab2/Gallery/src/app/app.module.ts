import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from 'src/Components/First/first.component';
import { SecondComponent } from 'src/Components/Second/second.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
