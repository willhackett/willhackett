import { createStore } from 'redux'

const initialState = {
  nav: false
}

export const toggleNav = { type: 'UI/TOGGLE_NAV' }

const reducer = (state = initialState, action) => ({
  [toggleNav.type]: ({
    ...state,
    nav: !state.nav
  })
}[action.type] || state)

export default createStore(reducer)