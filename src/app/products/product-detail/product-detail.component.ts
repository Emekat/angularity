import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges, OnInit {
  @Output() bought = new EventEmitter<string>();
  @Input() product: Product | undefined;

  constructor() {

  }
  ngOnInit(): void {

  }

  buy() {
    this.bought.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`firsthand is ${product.firstChange}`);
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }
}
