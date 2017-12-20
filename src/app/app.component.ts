import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thisapp';
  products:Product[];
  //newProduct:Product;
constructor(){
  this.products=[new Product('Swater','A Nice Black Sweater','https://uniqlo.scene7.com/is/image/UNIQLO/goods_03_173223?$prod$',['Men','apparel','pants'],29.99),new Product('NICEHAT','A Nice Black Hat','https://images-eu.ssl-images-amazon.com/images/G/31//img16/apparel/women/SBC/western_wear_325x350._CB511961190_.jpg',['Men','apparel'],29.99),new Product('Dress','A denim','https://www.reitmans.com/on/demandware.static/-/Sites-Reitmans-catalog/default/dw68a95212/images/large/reitmans_400353_417_0.jpg',['hellow','world'],29.99),new Product('Pants','pants','https://images-na.ssl-images-amazon.com/images/I/41I35O0mmmL._SL500_.jpg',['Men','apparel','pants'],29.99),new Product('shirt','A white shirt','https://images-eu.ssl-images-amazon.com/images/G/31/img16/imports/AGS/Clothing_Dept_Women._V280609451_.jpg',['WoMen','apparel'],299.99)];
//   this.newProduct=new Product('NICEHAT','A Nice Black Hat','yes.png',['hellow','world'],29.99);
 // console.log(this.newProduct);  
  console.log("ooo----"+this.products);  

}

productWasSelected(product:Product):void{
  console.log('product clicked in app component',product);
}
// ye yaha pe ku define kara?
}



//app.componmnent k object baar baar banane hai to ?




