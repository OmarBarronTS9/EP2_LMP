import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  declare userList: AngularFireList<any>;

  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers(){
    if (this.selectedUser == null){
      this.ErrorMsg();
    }

  }

  insertUser(user: User){
    this.userList.push({
      name: user.name,
      krrera: user.carrera
    });
  }

  updateUser(user: User){
    this.userList.update(user.$id, {
      name: user.name,
      krrera: user.carrera
    })
  }

  deleteUser($id: string){
    this.userList.remove($id);
  }

  ErrorMsg(){
    return alert("Este es un mensaje de error, favor de comprobar sus datos");
  }

}
