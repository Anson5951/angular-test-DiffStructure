import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { Product } from './product/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  list: Product[] = [];
  product: Product;
  showProductDetail = false;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProducts$().subscribe((data: Product[]) => {
      for (let i in data) {
        data[i].id = Number.parseInt(i);
      }
      this.list = data;
    });
  }

  addProduct(inputRef: HTMLInputElement): void {
    const newProduct = {
      id: this.list.length,
      productName: inputRef.value,
      productDescription: ''
    } as Product;
    this.list.push(newProduct);
    inputRef.value = '';
  }

  deleteProduct(productId: number) {
    this.list = this.list.filter((data: Product) => data.id !== productId);
  }

  edit(product: Product) {
    this.product = Object.assign({}, product);
    this.showProductDetail = true;
  }

  update(product: Product) {
    const editIndex = this.list.findIndex(
      (data: Product) => data.id === product.id
    );
    this.list[editIndex] = product;
    this.showProductDetail = false;
  }
}
