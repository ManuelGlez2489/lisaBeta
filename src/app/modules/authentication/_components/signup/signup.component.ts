import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptedTOS: new FormControl(false), 
    type: new FormControl('consumer')
  });
  signUpModel: any = {};
  message: string;
  type: string;
  constructor(private _authService: AuthService,private _localStorageService: LocalStorageService) { }

  
  ngOnInit(): void {
    this.type = "danger";
  }


  signup(){
      this.message = "";

      console.log("Valores del model"+JSON.stringify(this.signUpForm.value));
      

      if(this.validateSignUpForm()){
          this._authService.postSignUp(this.signUpForm.value)
          .subscribe( 
          data =>{
            console.log("Sing up succed"+JSON.stringify(data));
          }, error =>{
            this.message = error.error.message;
          })
      }


  }


  validateSignUpForm(){

    if(!this._authService.validateEmail(this.signUpForm.value.email)){
      this.message = "Need a valid email address."
      return false;
    }

    if(this.signUpForm.value.password.length < 8 || this.signUpForm.value.confirmPassword < 8){
      this.message = "Password must be at least 8 characters"
      return false;
    }

    if(!this.verifyPassword(this.signUpForm.value.password, this.signUpForm.value.confirmPassword)){
      this.message = "Passwords do not match.";
      return false;
    }

    if(!this.signUpForm.value.acceptedTOS){
      this.message = "Please accept our terms and conditions.";
      return false;
    }


    return true;

  }

  verifyPassword(password: string, confirmedPassword: string) {
    if (!password || !confirmedPassword) {
        return false;
    }
    return password === confirmedPassword;
  }


}
