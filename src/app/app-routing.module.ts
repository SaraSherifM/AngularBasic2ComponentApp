import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantComponent } from './applicant/applicant.component';
import { JobsComponent } from './jobs/jobs.component';



const routes: Routes = [

  {path: 'applicant', component:ApplicantComponent},
   {path: '', component:JobsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
