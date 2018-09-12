import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNavComponent } from './my-nav/my-nav.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: MyNavComponent    
  },
  {
    path:"candidate-registration",
    component:CandidateRegistrationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}