import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCountState = (state: AppState) => state.counter;

export const selectCount =  createSelector(
  selectCountState,
  (state) => state.count
)
