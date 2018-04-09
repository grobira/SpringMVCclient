import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListService } from './user-list/user-list.service';
import { UserService } from './user/user.service'; 
import { UserComponent, NoNameDialog } from './user/user.component'; 
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatDialogModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const appRoutes: Routes = [
	{
		path: '',
		component: UserListComponent
	},
	{
		path: 'new',
		component: UserComponent
	},
  {
    path: 'user/:id',
    component: UserDetailComponent
  }
	];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserDetailComponent,
    NoNameDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  entryComponents: [NoNameDialog],
  providers: [UserListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
