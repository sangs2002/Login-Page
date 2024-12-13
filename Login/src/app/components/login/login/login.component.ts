import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from '../../../helpers/validate';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from '../../../Services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  type = 'password';
  isText = false;
  eyeIcon = 'fa-eye-slash';
  resetpasswordemail!:string;
  isValid!:boolean;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private Toast: NgToastService,
    private UserStoreService:UserStoreService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      //send to the database
      console.log(this.loginForm.value);

      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          // alert(res.message)
          this.Toast.success({
            detail: 'SUCCESS',
            summary: res.message,
            duration: 5000,
          });
          //this.loginForm.reset();
         let tokenpayload = this.auth.decodedtoken();
          this.auth.storetoken(res.token);
          this.UserStoreService.setfullnamefromstore(tokenpayload.firstName);
          this.UserStoreService.setrolefromstore(tokenpayload.role);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          //alert(err.error.message)
          this.Toast.error({ detail: 'ERROR', duration: 5000 });
        },
      });
    } else {
      //error

      // console.log("FORM IS NOT VALID");
      validateForm.validateAllFormFileds(this.loginForm);
      alert('Your Form is Invalid');
    }
  }

  checkvalidemail(event:string){
  const value=event;
  const pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/

  this.isValid=pattern.test(value)
  return this.isValid;
  }

  confirmtosend(){
    if(this.checkvalidemail(this.resetpasswordemail))
      console.log(this.resetpasswordemail);
      this.resetpasswordemail="";
      const buttonclose=document.getElementById('Close');
      buttonclose?.click;
    }
  }

