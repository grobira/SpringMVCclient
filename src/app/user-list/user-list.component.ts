import { UserListService } from './user-list.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent{
	users: Array<any>;

	constructor(private userListService: UserListService){ }

	ngOnInit(){
		this.userListService.getAll().subscribe(data=> {
			this.users = data;
		});
	}
}
