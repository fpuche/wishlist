import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/app/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {

  }

  @Output()
  addWish = new EventEmitter<WishItem>();

  newWishText = '';
  addNewWish(){
    //this.items.push( new WishItem( this.newWishText ));
    this.addWish.emit(new WishItem( this.newWishText ));
    this.newWishText = '';
  }

}
