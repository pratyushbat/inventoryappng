import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';
import { Product } from '../product.model';
@Component({

  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];



  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();

//    console.log(":: current ::" + this.onProductSelected);
    

    //console.log("::" + this.currentProduct);

  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
    console.log("===="+this.currentProduct.sku);
    console.log("emitted is "+this.onProductSelected.emit(product));
  }
  // productWasSelected()
  // {
  //   this.onProductSelected.subscribe((name: string) => console.log(`Hello ${name}`));
  //   this.onProductSelected.emit();
  //   // -> "Hello Nate"
  // }
  
  
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    // console.log("------------------------------");
    // console.log(product);
console.log(    product.sku === this.currentProduct.sku);
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
