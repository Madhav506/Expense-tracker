import { Component, SecurityContext } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../shared/models/shared.model';
import { UserService } from '../../shared/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
  imports: [ReactiveFormsModule, CommonModule],
})
export class UserRegistrationComponent {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [Date.now()], // new id based on current timestamp assigned to user
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      budgetLimit: ['', [Validators.required, Validators.min(0)]],
      balance: ['', [Validators.required, Validators.min(0)]],
    });
  }

  //sanitize the input
  sanitizeInput(value: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || '';
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const sanitizedFormValues: User = {
        firstName: this.sanitizeInput(this.userForm.value.firstName),
        lastName: this.sanitizeInput(this.userForm.value.lastName),
        email: this.sanitizeInput(this.userForm.value.email),
        password: this.sanitizeInput(this.userForm.value.password),
        budgetLimit: Number(
          this.sanitizeInput(this.userForm.value.budgetLimit.toString())
        ),
        balance: Number(
          this.sanitizeInput(this.userForm.value.balance.toString())
        ),
        id: 0,
      };

      this.userService.addUser(sanitizedFormValues);
      this.userForm.reset({ id: Date.now() }); // Reset the form and set a new id
      alert('User registration completed successfully');
    }
  }
}
