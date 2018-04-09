import { UserService } from '../user/user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent{
	users: Array<any>;

	constructor(private userService: UserService){ }

	ngOnInit(){
		this.userService.getAll()
			.subscribe(data=> {
				this.users = data;
			});
	}


	filterByAge(value: string) : void {
		if(value != ""){
			this.userService.filterByAge(value)
				.subscribe(data=>
					this.users = data;
				});
		}
	}
}
