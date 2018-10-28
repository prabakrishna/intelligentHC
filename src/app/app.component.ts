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

  
  iterationids : Iteration[]
  
  removeIter(){
    this.iterationids.pop
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
