import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemBuilderComponent } from './system-builder/system-builder.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { PickerLibModule } from 'picker-lib';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SystemBuilderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerLibModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
