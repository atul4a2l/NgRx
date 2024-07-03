import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { changeName, customDecrement, customIncrement, decrement, increment, reset } from "./counter.actions"

export const counterReducer = createReducer(initialState, on(increment, (state)=> {
    return {
        ...state,
        counter: state.counter + 1,
    };
}),
on(decrement, (state)=> {
    return {
        ...state,
        counter: state.counter -1,
    };
}),
on(reset, (state)=> {
    return {
        ...state,
        counter: 0,
    };
}),
on(customIncrement, (state, action)=> {
    console.log(action)
    return {
        ...state,
        counter: state.counter + action.value,
    }
}),
on(customDecrement,(state, action)=> {
    return {
        ...state,
        counter: state.counter - action.decrement
    }
}),
on(changeName, (state)=> {
    return {
        ...state,
        name: "AG"
    }
})
)