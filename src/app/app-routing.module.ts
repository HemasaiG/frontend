import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"posts", component:MessagesComponent},
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"users",component:UsersComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"",component:WelcomeComponent},
  {path:"feed",component:PostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
