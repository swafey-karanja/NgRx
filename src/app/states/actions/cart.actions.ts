import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product";


export const addToCart = createAction('[Cart Component] addToCart', props<{ product: Product; }>())
export const incrementProduct = createAction('[Cart Component] incrementProduct', props<{ productId: number }>())
export const decrementProduct = createAction('[Cart Component] decrementProduct', props<{ productId: number }>())
