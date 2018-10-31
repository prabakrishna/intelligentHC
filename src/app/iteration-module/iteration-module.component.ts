import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ecorr} from '../Models/Ecorr.model';
import { FalloutAccount } from '../Models/Fallout.model';
import {ActivatedRoute} from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PgserviceService } from '../pgservice.service';

@Component({
  selector: 'app-iteration-module',
  templateUrl: './iteration-module.component.html',
  styleUrls: ['./iteration-module.component.css'],
  animations:[
   trigger('ecorr-div', [
     state('hide', style({
       transform:'translateX(-100px)',
       opacity:0
           
     })),
     state('show', style({
      'background-color':'rgb(204, 230, 247)',
       transform:'translateX(0px)'            
     })),
     transition('*=>*',animate(300))

   ]),

   trigger('fallout-div', [
    state('hide', style({
      transform:'translateX(-100px)',
      opacity:0
          
    })),
    state('show', style({
     'background-color':'rgb(204, 230, 247)',
      transform:'translateX(0px)'            
    })),
    transition('*=>*',animate(300))

  ])
  ]
})
export class IterationModuleComponent implements OnInit {
//@ViewChild('iterationSelected') iterationSelected : ElementRef;
iterationId;
ecorrView = 'false';
ecorrViewStatus='hide';
falloutView = 'false';
falloutViewStatus = 'hide'
 ecorrAccounts : Ecorr[] 

falloutAccounts : FalloutAccount[] = [
  new FalloutAccount('14534567','9034234510001','Distributor Exception: RECORD LENGTH VALDATION '),
  new FalloutAccount('122345687','567234510001','Exception due to Phrase code 8801R01:PhraseCodeType'),
  new FalloutAccount('123456778','3454234510001','Null Pointer Exception in Sorting')
];



  constructor(private route:ActivatedRoute,private service:PgserviceService) { 
this.route.params.subscribe(res=>this.iterationId=res.id);

  }

  ngOnInit() {
this.service.getEcorrListFormJson().subscribe(resp=>this.ecorrAccounts = resp);
  }

  pickAnIteration(){
   // this.iterationId = this.iterationSelected.nativeElement.value;
   console.log("inside")
    
  }

  showAccounts(){
    console.log("inside");
      console.log(this.ecorrAccounts.length);
  }

  showEcorr(){
    this.ecorrViewStatus=='hide'?this.ecorrViewStatus='show': this.ecorrViewStatus='hide';
    this.ecorrView=='true'?this.ecorrView='false': this.ecorrView='true';

  }

  
  showFallout(){
    this.falloutViewStatus=='hide'?this.falloutViewStatus='show': this.falloutViewStatus='hide';
    this.falloutView=='true'?this.falloutView='false': this.falloutView='true';

  }
}
