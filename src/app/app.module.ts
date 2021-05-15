import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ListComponent } from './wishlist/list/list.component';
import { CreateEditComponent } from './wishlist/create-edit/create-edit.component';
import { WishlistService } from './wishlist/wishlist.service';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    ListComponent,
    CreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
