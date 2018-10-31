import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { Iteration } from './Models/Iteration.model';
import { Observable } from 'rxjs';
import { Ecorr } from './Models/Ecorr.model';



@Injectable({
  providedIn: 'root'
})
export class PgserviceService implements OnInit{
    
  baseURL = "http://localhost:4000"
  jsonUrl= "http://localhost:3000";
  iterationjsonUrl ="./assets/data/iteration.json";
  ecorrjsonUrl = "./assets/data/ecorr.json";
  constructor(private http:HttpClient ) {

  }

  result: any;
  ngOnInit(){
   
  }

  getIterationDetails():Observable<Iteration[]>{
    return this.http.get<Iteration[]>(this.baseURL+"/Iteration");
  }

  getIerationList():Observable<Iteration[]>{
    return this.http.get<Iteration[]>(this.jsonUrl+"/iterationlist");
  }
/*
  getIterationList(){
     this.http.get("/server/getIterationList").map(result=>{
       this.result = result.json().data;
     })
  }*/


  getEcorrDetails():Observable<Ecorr[]>{
    return this.http.get<Ecorr[]>(this.jsonUrl+"/EcorrList");
  }

  getIterationDetailsFromJson() {
   return this.http.get<Iteration[]>(this.iterationjsonUrl );

  }

  getEcorrListFormJson(){
    return this.http.get<Ecorr[]>(this.ecorrjsonUrl);
   

}
}
