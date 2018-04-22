import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import {Router,ActivatedRoute} from "@angular/router";
 
@Component({
  selector: 'app-dashboard-items',
  template: `<button (click)="GetAllProducts()" type="button" class="btn btn-success"> Make An Order </button>
  <hr>
  <br>
  <div *ngFor="let product of products">
    <div class="card" style="height:75px; display:block; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: transparent;">

    <div style="float:right;">
    <Button style="border-raduis:100px; margin-top: 12px" (click)="chooseproduct(product._id)" class="btn btn-success"> Select</Button>
    </div>
      
    <div style="float:left">
        <h5>Product name: <b style="color:red"> {{product.name}} </b> </h5> 
      <h5>Product price: <b style="color:red"> {{product.price}} </b> </h5>
      </div>
  </div>

    <br>


  </div>

  <h3 *ngIf="order"> your Order : {{Product}} </h3> 


  
  `
})
export class ItemsComponent  {

constructor(private httpClient: HttpClient, private router: Router){}
order:boolean=false;
Product:any;
products=[];
GetAllProducts(){
  var config = {
    headers : {
    'Content-Type': 'application/json'
   } 
  }
  this.httpClient.get(environment.apiUrl+'/product/getProducts',config)
    .subscribe(res=>{
      this.products=res['data'];
      console.log(res['data'])
    }
    ,err=>{
      console.log(err['error']['msg']);
    });
}

chooseproduct(Id:any){
  var config = {
    headers : {
    'Content-Type': 'application/json'
   } 
  }
  this.order=true;
  this.httpClient.get(environment.apiUrl+'/product/getProduct/'+Id,config).subscribe(res=>{
    this.Product=res['data']['name']
  },err=>{
    console.log(err['error']['msg']);
  });
}


}
