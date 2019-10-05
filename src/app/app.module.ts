import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {FactComponent} from './components/fact/fact.component';
import {NavComponent} from'./nav/nav.component';
import {ImageComponent} from './components/image/image.component';

@NgModule({
  imports:      [
    BrowserModule, 
    FlexLayoutModule, 
    FormsModule,
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    ScrollingModule,
  ],
  declarations: [ AppComponent, FactComponent, NavComponent, ImageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
