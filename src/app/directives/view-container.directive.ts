import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-view-container]'
})
export class ViewContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
