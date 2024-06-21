import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from '../auth/user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from '../auth/user-registration/user-registration.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'edit-expense/:id', component: EditExpenseComponent }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
