import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {

  }

  senderNameControl = new FormControl( '' );
  senderEmailControl = new FormControl( '' );
  senderMessageControl = new FormControl( '' );

  submitForm(){
    if(this.senderNameControl.dirty){
      alert('You change de name field');
    }
  }

}
