import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  routes: any
  constructor(private router: Router) { }



  ngOnInit(): void {
    this.generateRoutes();
  }
  generateRoutes() {
    var _routes: any = this.router.url.split('/');
    var _result: any[] = [];
    for (var i = 0; i < _routes.length; i++) {
      if (_routes[i] !== "" && _routes[i] !== "consumer") {
        _result.push(_routes[i]);
      }
    }
    this.routes = _result;
  }

}
