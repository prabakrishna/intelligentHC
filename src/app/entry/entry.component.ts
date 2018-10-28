import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  heading = "Intelligent Health Check";
  btnText = "Go";
  region:string = "";
  regions=[
    'Vision',
    'NPD',
    'NYNE',
    'MDV'
  ];
  env:string ="";
  envs:string[];
  visionEnv =[
    'DEV5','DEV6','DEV7','DIT5','DIT6','DIT8','ITO6','BST5','BST6','BST8'
  ];
  npdEnv =[
    'DEV1','DEV2','DIT1','DIT2','ITO2','BST1','BST2'
  ];
  nyneEnv =[
    'DEV3','DEV4','DIT3','DIT4','ITO4','BST3','BST4'
  ];

  constructor(private router : Router) {    
   }

  ngOnInit() {
    sessionStorage.removeItem("region");
  sessionStorage.removeItem("env");
  }
  loadEnv(region){
  
    if("Vision" == region){
      this.envs = this.visionEnv;
    }
    else if("NPD" ==region){
      this.envs = this.npdEnv;
    }
    else if("NYNE" == region  || "MDV" == region){
      this.envs = this.nyneEnv;
    }
  }
  
  submit(val:Region){
  sessionStorage.setItem("region",val.region);
  sessionStorage.setItem("env",val.env);
this.router.navigate(["Home"]);
  }

}
