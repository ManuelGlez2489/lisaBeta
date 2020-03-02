import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  signUpForm = new FormGroup({
    email: new FormControl(''),
    
  });
  message: string;
  type: string;
  isLoading: boolean
  ngOnInit(): void {
    this.type = 'danger';
  }

  recover(){
    this.message = "";
    this.isLoading = true;
    if(this._authService.validateEmail(this.signUpForm.value.email)){
      this._authService.postRequestPassword(this.signUpForm.value).subscribe(          
        data =>{
        this.isLoading = false;
        console.log("Recovery password"+JSON.stringify(data));
        //todo add redirect to generic page or login page
      }, error =>{
        this.message = error.error.message;
        this.isLoading = false;
      })
    }else {
      this.message = "Need a valid email address."
    }
    
  }

}
