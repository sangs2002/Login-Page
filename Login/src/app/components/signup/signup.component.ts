import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from '../../helpers/validate';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash"
  signform!:FormGroup;
   constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,private toaster:NgToastService)
 {
  
 }
 ngOnInit(): void {
   this.signform = this.fb.group({
     firstname: ['', Validators.required],
     lastname: ['', Validators.required],
     email: ['', Validators.required],
     username: ['', Validators.required],
     password: ['', Validators.required],
 });
 }
  hideShowPass(){
   this.isText=!this.isText;
   this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
   this.isText? this.type="text" :this.type="password";
  }
  
  onSignup()
  {
   if(this.signform.valid)
   {
     console.log(this.signform.value)
     this.auth.signup(this.signform.value).subscribe({
      next:(res)=>{
        alert(res.message)
        this.signform.reset()
        this.toaster.success({detail:"Successfully Registered"})
        this.router.navigate(['Login'])
      },
      error:(err)=>{
        alert(err.error.message)
      }
     })
     //send the obj to database
   }
   else{
     console.log("Form not valid")
     validateForm.validateAllFormFileds(this.signform);
     alert("Your form is invalid")
       //throw the error using toaster with required field
   }
  }
  
 

}
