import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';

export const routes: Routes = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'registration', component: UserRegistrationComponent }
  ];