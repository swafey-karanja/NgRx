import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { take } from 'rxjs';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: Product[] = [];
  constructor(private productsSevice: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsSevice.getProducts().pipe(take(1)).subscribe({
      next: (response: Product[]) => {
        console.log(response);
        this.products = response;
      },
      error: (error) => {
        console.error(error);
      }
    }
    )
  }
}
