import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ConsumerService } from '../../_services/consumer.service';
import { Profile } from 'src/app/models/profile';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService,private _consumerService: ConsumerService) { }
  session;
  token;
  id;
  isLoading: boolean;
  profile = new Profile();
  profileForm: FormGroup
  
  
  isEditing: boolean = false;
  ngOnInit(): void {

    this.isLoading = true;
    
    this.session = this._localStorageService.getSession();
    this.id = this.session.user.id;
    this.token = this.session.token.access_token
    
    this.getProfile();

    
    
  }

  tooggleView(){
    this.isEditing = !this.isEditing;


  }

  
  editProfile(){


    this._consumerService.editProfile(this.id,this.profileForm.value,this.token).subscribe(
      data => {
        console.log(data);
        this.getProfile();
        this.isEditing = false;
      },
      error =>{
        console.log(error);
      }
    )
  }

 

  getProfile(){
    this._consumerService.getProfile(this.id,this.token).subscribe(
      data =>{
        this.profile.deserialize(data);
        this.profileForm = new FormGroup({
          nickname: new FormControl(this.profile.nickname),
          first_name: new FormControl(this.profile.first_name),
          last_name: new FormControl(this.profile.last_name),
          phone_number: new FormControl(this.profile.phone_number),
        });
        this.isLoading = false;
      },
      error =>{
        console.log("error "+error);
      }
    )
  }

}
