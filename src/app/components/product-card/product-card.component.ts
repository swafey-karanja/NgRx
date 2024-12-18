import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() handleAdd = new EventEmitter();


  ngOnInit () {

  }

  addToCart(product: Product) {
    this.handleAdd.emit(product);
  }
}
