import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Wishlist } from '../wishlist.model';
import Swal from 'sweetalert2'
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  wishlist: Wishlist[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient, private WishService: WishlistService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.wishlist = this.WishService.wishlist
    // this.httpClient.get<Wishlist[]>('data/data.json')
    //   .subscribe(data => {
    //     this.wishlist = (data as any).data;
    //     // Calling the DT trigger to manually render the table
    //     this.dtTrigger.next();
    //   });

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  //Delete WIshlist
  onDeleteWish(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Wish!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        let wishes = this.WishService.wishlist
        let newArray = []
        if (wishes.length) {
          for (let index = 0; index < wishes.length; index++) {
            const element = wishes[index];
            if (element.id != id) {
              // indexId = index
              newArray.push(element)
            }
          }
        }
        this.WishService.wishlist = newArray
        this.wishlist = newArray
        
        Swal.fire(
          'Deleted!',
          'Your Wish has been deleted from the Wishlist.',
          'success'
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your  Wish is safe :)',
          'error'
        )
      }
    })
  }

}
