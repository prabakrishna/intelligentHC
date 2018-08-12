import { Component } from '@angular/core';
import { Iteration } from './Models/Iteration.model';
import { trigger, state, style, transition, animate } from '@angular/animations';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'app';
  view = '';
  status = 'highlighted';
  const =10000;

  
  iterationids : Iteration[]=[
   /* new Iteration(10001,0,100,'In Progress'),
    new Iteration(10002,0,50,'In Progress'),
    new Iteration(10003,0,100,'Completed'),
    new Iteration(10001,0,100,'In Progress'),
    new Iteration(10002,0,50,'In Progress'),
    new Iteration(10003,0,100,'Completed'),
    new Iteration(10001,0,100,'In Progress'),
    new Iteration(10002,0,50,'In Progress'),
    new Iteration(10003,0,100,'Completed')*/
  ];
  newIter(){
    
    this.iterationids.push(new Iteration(this.const+1,0,50,'In Progress'));
    console.log(this.iterationids.length);
    this.iterationids.length >1 ? this.iterationids[this.iterationids.length-2].status='Completed':this.iterationids[this.iterationids.length-1].status='In Progress';
    this.const=this.const+1; 
  }

  removeIter(){
    this.iterationids.pop
  }
  onHover(iterationid:number){
   for( var i=0;i<this.iterationids.length;i++){
     if(this.iterationids[i].iterationid == iterationid){
       this.iterationids [i].min=this.iterationids[i].min+10;
       if(this.iterationids[i].min==this.iterationids[i].max){
         this.iterationids[i].status="Completed";
       }
     }
   }
  }

  showModule(){
    console.log("Showing");
    this.view='module';
  }

  showIterations(){
    this.view='iteration';
  }

  switchView(){
    this.status=='normal'?this.status='highlighted':this.status='normal';
  }


}
