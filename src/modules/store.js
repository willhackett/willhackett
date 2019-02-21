import { createStore } from 'redux'

const initialState = {
  nav: false,
  theme: 'light'
}

export const toggleNav = { type: 'UI/TOGGLE_NAV' }

export const toggleTheme = { type: 'UI/TOGGLE_THEME' }

const reducer = (state = initialState, action) => ({
  [toggleNav.type]: ({
    ...state,
    nav: !state.nav,
  }),
  [toggleTheme.type]: ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light'
  })
}[action.type] || state)

export default createStore(reducer)