import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddToTableComponent } from 'src/Components/add-to-table/add-to-table.component';
import { ChangeComponent } from 'src/Components/change/change.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeComponent,
    AddToTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
