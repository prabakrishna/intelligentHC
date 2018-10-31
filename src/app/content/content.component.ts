import { Component, OnInit, AfterViewInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { Iteration } from '../Models/Iteration.model';
import { PgserviceService } from '../pgservice.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  iterationids : Iteration[]
  seldate =new Date();
page=0;
  constructor(private service:PgserviceService){}
  ngOnInit(): void {
    //this.service.getIerationList().subscribe(resp => this.iterationids = resp);
  this.service.getIterationDetailsFromJson().subscribe(resp=> this.iterationids = resp);

    
  }
  title = 'app';
  view = '';
  status = 'highlighted';
  const =10000;

  
 
  
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

  

  filterbydate(){
    this.iterationids = this.iterationids.filter(iteration=>
     iteration.rundate === this.seldate)    
  }




}
