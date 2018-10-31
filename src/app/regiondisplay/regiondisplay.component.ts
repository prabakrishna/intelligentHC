import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-regiondisplay',
  templateUrl: './regiondisplay.component.html',
  styleUrls: ['./regiondisplay.component.css']
})
export class RegiondisplayComponent implements OnInit,AfterViewInit {

  region:string;
  env:string;
  constructor(private changeRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  
  ngAfterViewInit(): void {
    this.region = sessionStorage.getItem("region");
    this.env  = sessionStorage.getItem("env");   
    this.changeRef.detectChanges();
  }

}
