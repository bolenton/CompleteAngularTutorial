import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
  //Properties
  title: string = "List of courses";
  email: string = "me@example.com";
  imageUrl = "http://lorempixel.com/400/200";
  colSpan: number = 2;
  isActive: boolean = true;
  courses: Array<String>;

  //Ctor
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  //Methods
  onSave = ($event) => {
    $event.stopPropagation();
    console.log("Button was saved", $event);
  }

  onDivClicked = () => {
    console.log("Div was clicked");
  } 

  onKeyUp() {
    console.log(this.email)
  }

}
