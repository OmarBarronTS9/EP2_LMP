import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importacion de firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
//Componentes
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsersListComponent } from './components/usuarios/users-list/users-list.component';
import { UserComponent } from './components/usuarios/user/user.component';
//Servicios
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [//metemos el servicio aqui
    UserService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
