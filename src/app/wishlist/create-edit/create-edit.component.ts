import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {

  private id: Number
  public label: string = "New"

  wishlistForm = new FormGroup({
    'name': new FormControl('', Validators.compose(
      [
        Validators.required
      ]
    ))
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //get paramters
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.id = params['id']
      }
    });
  }
  //Get Wishlist Detail
  getWishListDetails() {
    console.log(this.id)
  }

  //Submit The Form
  onSubmit() {
    if (this.wishlistForm.valid) {
      console.log(this.wishlistForm.value)
      alert('Form Submitted Success fully')
      this.router.navigate['/']
    } else {
      alert('Please Fill Required Field')
      this.wishlistForm.markAllAsTouched()
    }
  }


}
