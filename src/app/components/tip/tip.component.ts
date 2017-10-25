import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css'],
  providers: [NavbarService]
})
export class TipComponent implements OnInit {

  constructor( public nav: NavbarService ) { }

  ngOnInit() {
    this.nav.show();
  }

}
