import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnDestroy {

  public titlePage: string;
  public titleSubs: Subscription;

  constructor(
    private router: Router
  ) { 
  this.titleSubs = this.getArgumentosRuta()
                          .subscribe( ({ titlePage }) => {
                              this.titlePage = titlePage
                              document.title = `AdminPro - ${ this.titlePage }`
                            }
                          )
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
            .pipe(
              filter( event => event instanceof ActivationEnd ),              
              filter(( event: ActivationEnd) => event.snapshot.firstChild === null ),
              map( (event : ActivationEnd) => event.snapshot.data )     
            )
  }

}
