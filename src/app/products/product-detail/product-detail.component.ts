import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges, OnInit {
  @Output() bought = new EventEmitter<string>();
  @Input() name = '';

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }
  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  buy() {
    this.bought.emit(this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`firsthand is ${product.firstChange}`);
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }
  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }
}
