import { Component, OnInit } from '@angular/core';
import { Iteration } from '../Models/Iteration.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-module',
  templateUrl: './container-module.component.html',
  styleUrls: ['./container-module.component.css'],
 /* animations:[
    trigger('div1',[
        state('normal',style({
              'background-color':'red',
              transform:'translateX(0)'
        })),
        state('change',style({
              'background-color':'green',
              transform:'translateX(100px) translateY(-100px)'
        })),

        transition('*=>*',[
          style({
            'background-color':'blue',
            transform:'translateX(50px) translateY(-50px)'
          }),
        
        animate(600, style({
          'background-color':'orange',
          transform:'translateX(75px) translateY(-75px)'
        })),

        animate(800)
      ])
    ])
  ]*/
})
export class ContainerModuleComponent implements OnInit {

  status='normal';
iterationids;
  /*iterationids : Iteration[]=[
  new Iteration(10001,0,100,'In Progress'),
     new Iteration(10002,0,50,'In Progress'),
     new Iteration(10003,0,100,'Completed'),
     new Iteration(10001,0,100,'In Progress'),
     new Iteration(10002,0,50,'In Progress'),
     new Iteration(10003,0,100,'Completed'),
  ];*/

  change(){
    this.status == 'normal' ? this.status = 'change' : this.status = 'normal';
  }
  constructor(private myService:MyServiceService, private router:Router) { }

  ngOnInit() {
    this.iterationids=this.myService.showIterations();
  }

  sendMetoIteration(iterationid){
    console.log("Iteration Id selected id" + iterationid)
    this.router.navigate(['iteration/'+iterationid]);
  }

}
