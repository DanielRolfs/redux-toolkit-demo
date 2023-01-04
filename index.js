const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updating state', store.getState())
})

store.dispatch(cakeActions.ordered(2))
store.dispatch(cakeActions.restocked(3))

/* store.dispatch(icecreamActions.ordered(3))
store.dispatch(icecreamActions.restocked(2)) */





unsubscribe()