import { Component, Inject } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent{
	user : any;

  constructor(private userService: UserService, 
  				private router: Router,
  				public dialog: MatDialog,
          private location: Location) { }


  onClickSave(name: string, lastName: string, age: string){
  	if(name != ""){
	  	this.userService.save(name, lastName, age).subscribe(data =>{
	  		this.user = data;
	  		this.router.navigate(["/"]);
	  	});
  	}else{
  		this.openDialogError();
  	}
  }

  openDialogError(){
  	let dialogRef = this.dialog.open(NoNameDialog, {
      width: '275px'
    });  
  }


  onClickBack(){
    this.location.back();
  }
}

@Component({
  selector: 'no-name-dialog',
  templateUrl: 'no-name-dialog.html',
})
export class NoNameDialog {

  constructor(
    public dialogRef: MatDialogRef<NoNameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

