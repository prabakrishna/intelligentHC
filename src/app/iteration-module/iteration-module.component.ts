import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ecorr} from '../Models/Ecorr.model';
import { FalloutAccount } from '../Models/Fallout.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-iteration-module',
  templateUrl: './iteration-module.component.html',
  styleUrls: ['./iteration-module.component.css']
})
export class IterationModuleComponent implements OnInit {
//@ViewChild('iterationSelected') iterationSelected : ElementRef;
iterationId;
 ecorrAccounts : Ecorr[] = [
  new Ecorr('1234567','1234234510001','OB041','12','5000','3800'),
  new Ecorr('1234568','3434234510001','OB211','5','89000','84000'),
  new Ecorr('1234567','8934234510001','OB053','34','7800','7766')
];

falloutAccounts : FalloutAccount[] = [
  new FalloutAccount('14534567','9034234510001','Distributor Exception: RECORD LENGTH VALDATION '),
  new FalloutAccount('122345687','567234510001','Exception due to Phrase code 8801R01:PhraseCodeType'),
  new FalloutAccount('123456778','3454234510001','Null Pointer Exception in Sorting')
];



  constructor(private route:ActivatedRoute) { 
this.route.params.subscribe(res=>this.iterationId=res.id);

  }

  ngOnInit() {

  }

  pickAnIteration(){
   // this.iterationId = this.iterationSelected.nativeElement.value;
   console.log("inside")
    //console.log(selectedIter.value);
  }

  showAccounts(){
    console.log("inside");
      console.log(this.ecorrAccounts.length);
  

  }
}
