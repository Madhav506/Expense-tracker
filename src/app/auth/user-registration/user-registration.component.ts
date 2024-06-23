import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../shared/models/shared.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [Date.now()], // new id based on current timestamp assigned to user
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      budgetLimit: ['', [Validators.required, Validators.min(0)]],
      balance: ['', [Validators.required, Validators.min(0)]]
    });
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser);
      this.userForm.reset({ id: Date.now() }); // Reset the form and set a new id
      alert('User registeration completed successfully');
    }
  }
  
}

