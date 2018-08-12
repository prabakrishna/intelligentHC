import { Injectable } from '@angular/core';
import {Iteration} from './Models/Iteration.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  showIterations(){
    
  let iterationids : Iteration[]=[
     new Iteration(10001,0,100,'In Progress'),
     new Iteration(10002,0,50,'In Progress'),
     new Iteration(10003,0,100,'Completed'),
     new Iteration(10004,0,100,'In Progress')
  ];
 
  
  return iterationids;
  }
}
