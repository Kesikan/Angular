import{Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent{
    title = "keisis";
    courses;
    imageUrl = "https://udemy-images.udemy.com/course/240x135/1653432_3a57_3.jpg";
    isActive = false;
    email = "dh@gmail.com";

    course={
        title:this.title,
        rating: 4.9745,
        students: 30123,
        price:190.95,
        releaseDate: new Date()
    }
    

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event)
    {
       console.log($event);
    }

    onKeyUp()
    {
        alert(this.email);
    }


}