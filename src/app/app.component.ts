import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[];

  num: number = 4;

  onAdd() {
    this.courses.push({ id: 4, name: 'Course-'+ this.num });
    this.num++
  }

  onRemove(course: Course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
    this.num --;
  }

  onChange(course: Course){
    course.name = "Updated Course"+ course.id;  
  }

  loadCourses(){ 
    this.courses = [
      {id: 1, name: "Course-1"},
      {id: 1, name: "Course-2"},
      {id: 1, name: "Course-3"}
    ];
  }

  trackCourse(index, course: Course) {
    return course ? course.id : undefined;
  }
}

class Course {
  id: number;
  name: string;
}
