import { combineReducers } from 'redux'

import * as characterActions from 'data/actions'

export default function characters (state = [], action) {
  switch (action.type) {
    case characterActions.CHARACTER_LIST_SUCCESS:
      return state.concat(action.data.results)
    default:
      return state
  }
}

export function loading (state, action) {
  switch (action.type) {
    case characterActions.CHARACTER_LIST_REQUEST:
      return true
    default:
      return false
  }
}

export function failed (state, action) {
  switch (action.type) {
    case characterActions.CHARACTER_LIST_FAILURE:
      return true
    default:
      return false
  }
}

export default combineReducers({
  characters,
  loading,
  failed
})
