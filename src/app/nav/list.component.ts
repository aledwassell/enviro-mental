import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: 'works',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() links;
  showFiller = false;
  constructor() { }

  ngOnInit() {
  }

}