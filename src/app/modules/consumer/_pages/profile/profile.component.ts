import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService) { }
  session;
  name;
  isEditing: boolean = false;
  ngOnInit(): void {
    console.log(this._localStorageService.getSession());
    this.session = this._localStorageService.getSession();
    console.log(this.session);
    this.name = "Cristian Franco"
    
  }

  editProfile(){
    this.isEditing = !this.isEditing;
  }

}
