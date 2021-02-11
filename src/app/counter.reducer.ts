import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions'

export const initialState = {
    val: 0
};

const _CounterReducer = createReducer (
    initialState,
    on(increment, (state: any) => {
        return {...state, val: state.val + 1};
    }),
    on(decrement, (state: any) => {
        return  {...state, val: state.val - 1};
    }),
    on(reset, (state: any) => {
        return  {...state, val: 0};
    })
);

export function counterReducer(state: any, action: any) {
    return _CounterReducer(state, action);
}