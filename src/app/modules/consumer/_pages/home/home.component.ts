import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    console.log("session"+JSON.stringify(this._localStorageService.getSession()));
    
  }

}
