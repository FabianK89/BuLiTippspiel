import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [NavbarService]
})
export class RegisterComponent implements OnInit {

  constructor( public nav: NavbarService ) { }

  ngOnInit() {
    this.nav.hide();
  }

}
