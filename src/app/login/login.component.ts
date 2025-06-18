import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../auth/auth.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , MatButtonModule , MatFormFieldModule , MatInputModule , MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb : FormBuilder , private authService: AuthService  , private router:Router){
    this.loginForm = this.fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      const payload = this.loginForm.value;
      this.authService.login(payload).subscribe({
        next: (response : any) => {
          console.log('Login successful', response);

          const token = response.token;
          console.log('Token:', token);
          // Store the token in local storage or session storage
          localStorage.setItem('token', token);

          this.loginForm.reset();
          this.router.navigate(['/users'])
          
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }


  // onLogout(){
  //   localStorage.removeItem('token');
  //   alert("logout from page");
  // }

}
