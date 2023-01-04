const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecream: 20,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream -= action.payload
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload
    },
  },
  /* Adding an extra reducer to give away an icecream with every cake order */
  /* extraReducers: {
    ['cake/ordered']: (state) => {
      state.numOfIcecream--
    }
  }
  Code blow is the same as above, but below syntax is recommended
  */
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, state => {
      state.numOfIcecream--
    })
  }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions