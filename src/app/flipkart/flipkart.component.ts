import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public term:string="";
  public products:any= [
    {name:'pen', price: 50, rating: 5, freedelivery:true},
    {name:'smartphone', price: 25000, rating: 4.8, freedelivery:true},
    {name:'Iphone', price: 90000, rating: 5, freedelivery:false},
    {name:'shirt', price: 2700, rating: 4.6, freedelivery:true},
    {name:'shoes', price: 5000, rating: 4.3, freedelivery:false},
    {name:'smartwatch', price: 4500, rating: 4.2, freedelivery:true},
    {name:'laptop', price: 56000, rating: 4.0, freedelivery:false},
    {name:'Ipad', price: 45000, rating: 4.8, freedelivery:true},
    {name:'charger', price: 2500, rating: 4.4, freedelivery:true},
    {name:'powerbank', price: 6000, rating: 4.9, freedelivery:false}
  ]

  filter(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }

  ofd(){
    this.products = this.products.filter((product:any)=>product.freedelivery==false);
  }
  plh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  phl(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  rlh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  rhl(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
aod(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price/2;
    return product;
  })
}
pwd(){
  this.products=this.products.map((product:any)=>{
    product.price=product.price+100;
    return product;
  })
}
tp(){
var total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
alert(total);
}
tci(){
  alert(this.products.length);
}
delete(i:number){
  this.products.splice(i,1); 
}
}
