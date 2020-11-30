import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/user.service';
import * as Cookie from 'js-cookie';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  declare userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.AgregarCookies();
    return this.userService.getUsers().snapshotChanges().subscribe((item: any) => {
      this.userList = [];
      item.forEach((element: any) => {
        let x = element.payload.toJSON();        
        x["$id"] = element.id;
        this.userList.push(x as User);
      });
    })
  }

  AgregarCookies(): void {
    Cookie.set('Ejemplo_de', 'Cookie_de_muestra', { expires: 1 });
    //Leer Cookies
    Cookie.get('Ejemplo_de');
    Cookie.get('Cookie_de_muestra');
  }

  onEdit(user: User){
    this.userService.selectedUser = Object.assign({}, user);
  }

  onDel($id: string){
    this.userService.deleteUser($id);
  }
}
