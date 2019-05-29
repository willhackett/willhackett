import isDark from 'is-dark'
import { createStore } from 'redux'

const initialState = {
  nav: false,
  theme: isDark() ? 'dark' : 'light',
  newVersion: false
}

export const toggleNav = { type: 'UI/TOGGLE_NAV' }

export const newVersion = { type: 'system/NEW_VERSION' }

export const toggleTheme = { type: 'UI/TOGGLE_THEME' }

export const setTheme = theme => ({
  type: 'UI/SET_THEME',
  theme
})

const reducer = (state = initialState, action) =>
  ({
    [toggleNav.type]: {
      ...state,
      nav: !state.nav
    },
    [toggleTheme.type]: {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light'
    },
    [setTheme().type]: {
      ...state,
      theme: action.theme
    },
    [newVersion.type]: {
      ...state,
      newVersion: true
    }
  }[action.type] || state)

export default createStore(reducer)
