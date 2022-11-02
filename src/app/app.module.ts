import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import {Routes,RouterModule} from '@angular/router';

const appRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'users/id:/name:',component:UserComponent},
  {path:'servers',component:ServersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
