import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Location } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent{
	user: any;

  constructor(private userService: UserService,
  				private route: ActivatedRoute,
  				private router: Router,
          private location: Location) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    	this.userService.getUser(id.toString())
    		.subscribe(user =>{
    			this.user = user;
    });
  }

  onClickUpdate(name: string, lastName: string, age: string){
  		this.userService.update(this.user.id, name, lastName, age)
        .subscribe(data =>{
    			this.user = data;
    			this.router.navigate(["/"]);
  		 });
  }

  onClickDelete(){
  		this.userService.delete(this.user.id)
        .subscribe(data =>{
    			this.user = data;
    			this.router.navigate(["/"]);
  		  });
  }

  onClickBack(){
    this.location.back();
  }

}
