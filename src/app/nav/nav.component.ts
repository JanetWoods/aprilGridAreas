import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnChanges{
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(){
    this.open = false;
  }


  toggleMenu() {
    if (this.open) {
      console.log('it was open, now it should close');
      this.open = false;
    } else if (!this.open) {
      console.log('it was closed, now it should open');
      this.open = true;
    }
  }
}
