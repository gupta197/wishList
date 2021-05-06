import { ListComponent } from './wishlist/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditComponent } from './wishlist/create-edit/create-edit.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: CreateEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
