import { ListComponent } from './wishlist/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditComponent } from './wishlist/create-edit/create-edit.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: CreateEditComponent },
  { path: 'edit/:id', component: CreateEditComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },

  //Use Component For Page Not Found
  { path: '**', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
