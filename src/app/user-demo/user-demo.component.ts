import { Component, ReflectiveInjector, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
  userName: string;
  //userService: UserService;
  constructor(public userService: UserService) { 
    // Create an _injector_ and ask for it to resolve and create a UserService
//const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
// use the injector to **get the instance** of the UserService
//this.userService = injector.get(UserService);
  }

  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
    name: 'Nate Murray'
    });
    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
    }

  ngOnInit() {
  }

}
