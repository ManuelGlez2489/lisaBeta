import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router, ActivationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-consumer-top-bar',
  templateUrl: './consumer-top-bar.component.html',
  styleUrls: ['./consumer-top-bar.component.scss']
})
export class ConsumerTopBar implements OnInit, OnDestroy {

  pageTitle: string
  routerObserver;
  session

  constructor(private route: Router, private _storageService: LocalStorageService) {
    this.routerObserver = this.route.events.subscribe((val) => {
      if (val instanceof ActivationStart) {
        this.pageTitle = val.snapshot.data.title;
      }
      else if (val instanceof ActivationEnd && !this.pageTitle) {
        this.pageTitle = val.snapshot.data.title;
      }
    });
    this.session = _storageService.getSession();
  }

  public ngOnInit() {
  }

  public ngOnDestroy() {
    this.routerObserver.unsubscribe();
  }
  logOut() {
    this._storageService.cleanLocalStorage();
  }
}
