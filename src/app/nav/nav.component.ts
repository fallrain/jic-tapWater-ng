import {Component, OnInit} from '@angular/core';
import routers from '../../router/routers';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  routers = routers;

  constructor() {
  }

  ngOnInit() {

  }
}
