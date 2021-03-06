import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NavbarService]
})
export class DashboardComponent implements OnInit {

  constructor( public nav: NavbarService ) { }

  ngOnInit() {
    this.nav.show();
  }

}
