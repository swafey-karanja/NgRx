import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "../reducers/cart.reducer";

export const selectedCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectedCartState,
  (state: CartState) => state.products
)
