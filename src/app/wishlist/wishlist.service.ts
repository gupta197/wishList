import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  dtOptions: DataTables.Settings = {};
  wishlist = [
    { id: 1, name: 'Police' },
    { id: 2, name: 'Doctor' },
    { id: 3, name: 'IAS' },
    { id: 4, name: 'IPS' },
    { id: 5, name: 'Engineer' },
  ];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor() { }
}
