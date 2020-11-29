import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';
import { } from '../../../models/user'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  declare userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void{
    this.userService.getUsers()
    .snapshotChanges()
    .subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();        
        x["$id"] = element.id;
        this.userList.push(x as User);
      });
    })
  }

  onEdit(user: User){
    this.userService.selectedUser = user;
  }

  onDel($id: string){
    this.userService.deleteUser($id);
  }

}
