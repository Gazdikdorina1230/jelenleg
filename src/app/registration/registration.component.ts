import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  standalone: false,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // registrationForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private router: Router,private authservice:AuthService) { }
  //   this.registrationForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(5)]],
  //     confirmPassword: ['', [Validators.required]]
  //   }, {
  //     validators: this.passwordsMatchValidator
  //   });
  // }

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  register(){
    this.authservice.register(this.email, this.password)
  }

  registerwithgoogle(){
    this.authservice.registerorloginWithGoogle()
  }

}



  // onSubmit() {
  //   if (this.registrationForm.valid) {
  //     const formValue = this.registrationForm.value;
  //     localStorage.setItem('userEmail', formValue.email);
  //     localStorage.setItem('userPassword', formValue.password); 
  //     alert('Regisztráció sikeres!');
  //     this.router.navigate(['/login']);
  //   }
  // }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router'; 

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

//   constructor(private router: Router) {}

//   onSubmit(form: any) {
    
//     if (form.valid) {
      
//       this.router.navigate(['/login']);
//     }
//   }
// }


