import { Component, OnInit, Input } from '@angular/core';
import { Pagelink } from '../pagelink';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() links : Pagelink[]
  constructor() { }

  ngOnInit() {
  }

}
