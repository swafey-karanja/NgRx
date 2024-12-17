import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product";
import { addToCart, incrementProduct } from "../actions/cart.actions";


export interface CartState {
  products: Product[];
}

export const initialCartState: CartState = {
  products: []
}

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart,
    (state, { product }) => {
      const updatedProducts = [...state.products, product];
      return {
        ...state,
        products: updatedProducts
      }
    }
  ),

  on(incrementProduct, (state, {productId}) => {
    const updatedProducts = state.products.map((product) => product.id === productId ? product.quantity++ : product);
    return {
      ...state,
      products: updatedProducts
    }
  })
)
