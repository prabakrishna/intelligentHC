import { Component, OnInit } from '@angular/core';
import { Iteration } from '../Models/Iteration.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { PgserviceService } from '../pgservice.service';

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
  iterationids : Iteration[];  

  change(){
    this.status == 'normal' ? this.status = 'change' : this.status = 'normal';
  }
  constructor(private service:PgserviceService, private router:Router) { }

  ngOnInit() {
    this.service.getIterationDetailsFromJson().subscribe(resp=>{
      console.log("resp" +resp);
      this.iterationids = resp;
    });
  }

  sendMetoIteration(iterationid){
    console.log("Iteration Id selected id" + iterationid)
    this.router.navigate(['iteration/'+iterationid]);
  }

}
