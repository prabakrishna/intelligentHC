import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { ContainerModuleComponent } from './container-module/container-module.component';
import { IterationModuleComponent } from './iteration-module/iteration-module.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { HeaderComponent } from './header/header.component';
import { PgserviceService } from './pgservice.service';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { EntryComponent } from './entry/entry.component';
import { FooterComponent } from './footer/footer.component';
import { EcorrComponent } from './ecorr/ecorr.component';
import { RegiondisplayComponent } from './regiondisplay/regiondisplay.component';
import { UniversalGuard } from './universal.guard';



@NgModule({
  declarations: [
    AppComponent,
    ContainerModuleComponent,
    IterationModuleComponent,
    ChartComponentComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    EntryComponent,
    FooterComponent,
    EcorrComponent,
    RegiondisplayComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path:'',
        component:EntryComponent,
        pathMatch:"full"
      } , 
      {
        path:'iteration/:id',
        component:IterationModuleComponent,
        canActivate:[UniversalGuard]
      }  ,
      {
        path:'Home',
        component:ContentComponent,
        canActivate:[UniversalGuard]
      } ,
      {
        path:'ChangeRegion',
        component:EntryComponent
      },
      {
        path:'ModuleView',
        component:ContainerModuleComponent,
        canActivate:[UniversalGuard]
      },
      {
        path:'IterationView',
        component:IterationModuleComponent,
        canActivate:[UniversalGuard]
      },
      {
        path:"**",
        component:EntryComponent
      }
      
    ])    
    
  ],
  providers: [HttpClient,PgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
