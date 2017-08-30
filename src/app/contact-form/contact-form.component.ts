import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
  contactMethods: Array<Object> = [
    {id:1, name: 'home'},
    {id:2, name: 'work'}
  ]


  log(x){
    console.log(x);
  }

  submit(f){
    console.log(f.value)
    console.log(f);
  }
}
