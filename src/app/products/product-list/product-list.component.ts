import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 title = 'product list';
 myText = "my text";
 selectedProduct : Product | undefined;
 products : Product[] = [
  {
    name: 'Webcam',
    price: 100
  },
  {
    name:  'Microphone',
    price: 200
  },
  {
    name: 'Wireless keyboard',
    price: 85
  }
];
 @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

 AfterViewInit(): void {
  if (this.productDetail) {
    console.log(this.productDetail.product);
  }
 }

 onBuy(name: string) {
  window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
}
