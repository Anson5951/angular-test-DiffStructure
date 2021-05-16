import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() updateEvent: EventEmitter<Product> = new EventEmitter();
  

  constructor() {}

  ngOnInit() {

  }

  update() {
    
    this.updateEvent.emit(this.product);
  }
}
