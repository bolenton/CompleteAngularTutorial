import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {
  form2: FormGroup;
  // METHOD #1
  form = new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl,
      phone: new FormControl()
    }),
    topics: new FormArray([]),
  })

  // METHOD #2
  constructor(fb: FormBuilder){
    this.form2 = fb.group({
      name: ['', Validators.required], 
      contact: fb.group({
        email:[],
        phone: []
      })
    });
  };

  addTopic(topic: HTMLInputElement){
    (this.topics.push(new FormControl(topic.value)));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  }
  get topics (){
    return (this.form.get('topics') as FormArray);
  }
}
