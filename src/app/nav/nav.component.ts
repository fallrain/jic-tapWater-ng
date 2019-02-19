import {Component, OnInit} from '@angular/core';
import {routersPath} from '../../router/routersPath';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  routers = routersPath;

  constructor() {
  }

  ngOnInit() {

  }
}
