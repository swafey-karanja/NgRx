import { CartState } from "./reducers/cart.reducer";
import { CounterState } from "./reducers/counter.reducer";

export interface AppState {
  counter: CounterState;
  cart: CartState;
}
