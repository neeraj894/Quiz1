import { NotFoundComponent } from './notfound/notfound.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'quiz',
    component: MainComponent,
  },
  {
    path: '',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
