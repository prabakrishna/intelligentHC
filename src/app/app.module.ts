import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerModuleComponent } from './container-module/container-module.component';
import { IterationModuleComponent } from './iteration-module/iteration-module.component';
import {MyServiceService} from './my-service.service';
import { EcorrModuleComponent } from './ecorr-module/ecorr-module.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerModuleComponent,
    IterationModuleComponent,
    EcorrModuleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:ContainerModuleComponent
      } , 
      {
        path:'iteration/:id',
        component:IterationModuleComponent
      }    
    ])    
    
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
