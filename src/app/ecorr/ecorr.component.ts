import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecorr',
  templateUrl: './ecorr.component.html',
  styleUrls: ['./ecorr.component.css']
})
export class EcorrComponent implements OnInit {

  ecorrList=[];
  falloutList = [];
  constructor() { }

  ngOnInit() {
  }

}
