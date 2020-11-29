import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public submitAttempt: boolean = false;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
    this.resetForm()
  }

  onSubmit(userForm: NgForm){
    if(userForm.value.$id == null)
      this.userService.insertUser(userForm.value)
    else
      this.userService.updateUser(userForm.value);
    
      this.resetForm(userForm);
  }

  resetForm(userForm?: NgForm){
    if(userForm != null)
      userForm.reset();
      this.userService.selectedUser = new User();
  }

}
