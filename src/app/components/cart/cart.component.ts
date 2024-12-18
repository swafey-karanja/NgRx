import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../../states/selectors/cart.selector';
import { AppState } from '../../states/app.state';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { decrementProduct, incrementProduct, removeFromCart } from '../../states/actions/cart.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  product$ : Observable<Product[]>;

  constructor (private store: Store<AppState>) {
    this.product$ = this.store.select(selectCartProducts);
    console.log(selectCartProducts);
  }

  validateQuantity(product: any): void {
    if (product.quantity < 1 || !product.quantity) {
      product.quantity = 1; // Reset to 1 if less than 1 or invalid
    }
  }

  removeFromCart(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }

  increaseQuantity(productId: number) {
    this.store.dispatch(incrementProduct({ productId }));
  }

  decreaseQuantity(productId: number) {
    this.store.dispatch(decrementProduct({ productId }));
  }

}
