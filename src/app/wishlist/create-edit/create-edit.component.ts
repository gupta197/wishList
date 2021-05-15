import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {

  public id = 0
  public label = "New"
  public index = 0
  public lastId = 0
  public wishList = []

  wishlistForm = new FormGroup({
    'name': new FormControl('', Validators.compose(
      [
        Validators.required
      ]
    ))
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private WishService: WishlistService
  ) { }

  ngOnInit(): void {

    //get paramters
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id']
        this.label = 'Edit'
      }
    });
    this.wishList = this.WishService.wishlist
    let flag = false
    if (this.wishList.length) {
      let wishDetail = {}
      for (let index = 0; index < this.wishList.length; index++) {
        const element = this.wishList[index];
        if (element.id == this.id) {
          wishDetail = element
          this.index = index
          flag = true
          this.wishlistForm.get('name').patchValue(element.name)
        }
        this.lastId = parseInt(element.id)
      }
    }


    if (this.id && this.wishList[this.index].id != this.id) {
      Swal.fire('Oops...', 'Not Record Found. Please try again', 'error')
      this.router.navigate(['/'])
    }
  }

  //Submit The Form
  onSubmit() {
    if (this.wishlistForm.valid) {
      if (this.id) {
        this.wishList[`${this.index}`] = {
          id: this.id,
          name: this.wishlistForm.get('name').value
        }
      } else {
        this.lastId = this.lastId + 1
        this.wishList.push({
          id: this.lastId,
          name: this.wishlistForm.get('name').value
        })
        this.WishService.wishlist = this.wishList
      }

      // Swal.fire('Done', 'You Wish Saved in Your wishlist', 'success')
      this.router.navigate(['/'])
    } else {
      Swal.fire('Oops...', 'Please Fill Required Field', 'error')
      this.wishlistForm.markAllAsTouched()
    }
  }


}
