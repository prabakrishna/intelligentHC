import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Pagelink } from '../pagelink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  heading = "Intelligent Health Check ";
  logo = "assets/images/logo.jpg";
  pageLinks : Pagelink[]=[
    {
      linkRef:'Home',
      linkText:'Home'
    },
    {
      linkRef:'ModuleView',
      linkText:'Module View'
    },
    {
      linkRef:'IterationView',
      linkText:'Iteration View'
    },
    {
      linkRef:'ChangeRegion',
      linkText:'Change Region'
    }
  ];
  
  showRegion :boolean = false;;

  constructor() { }

  ngOnInit() {

  }

}
