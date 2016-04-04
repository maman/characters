import { combineReducers } from 'redux'

import * as characterActions from 'data/actions'

export default function characters (state = [], action) {
  switch (action.type) {
    case characterActions.CHARACTER_LIST_SUCCESS:
      let data = action.data.results.map((character) => {
        let chunkedUrl = character.url.split('/').filter((char) => { return char !== '' })
        character.id = chunkedUrl[chunkedUrl.length - 1]
        return character
      })
      return state.concat(data)
    default:
      return state
  }
}

let initialDetailState = {
  data: {},
  additional: []
}

export default function detail (state = initialDetailState, action) {
  switch (action.type) {
    case characterActions.CHARACTER_GET_SUCCESS:
      return Object.assign({}, state, {
        data: action.data
      })
    case characterActions.LOAD_ADDITIONAL_REQUEST:
      return Object.assign({}, state, {
        additional: state.additional.concat([Object.assign({}, {
          id: action.id,
          section: action.section
        })])
      })
    case characterActions.LOAD_ADDITIONAL_SUCCESS:
      return Object.assign({}, state, {
        additional: state.additional.map((additional) => {
          let result = Object.assign({}, additional, {
            loading: false,
            failed: false
          })
          if (additional.id === action.id) {
            result.data = action.data
            result.section = action.section
          }
          return result
        })
      })
    case characterActions.LOAD_ADDITIONAL_FAILURE:
      return Object.assign({}, state, {
        additional: state.additional.map((additional) => {
          if (additional.id === action.id) {
            return Object.assign({}, {
              loading: false,
              failed: true,
              section: action.section
            })
          }
        })
      })
    case characterActions.CHARACTER_CLEAR:
      return initialDetailState
    default:
      return state
  }
}

export function loading (state, action) {
  switch (action.type) {
    case characterActions.CHARACTER_LIST_REQUEST:
    case characterActions.CHARACTER_GET_REQUEST:
      return true
    default:
      return false
  }
}

export function failed (state, action) {
  switch (action.type) {
    case characterActions.CHARACTER_LIST_FAILURE:
    case characterActions.CHARACTER_GET_FAILURE:
      return true
    default:
      return false
  }
}

export default combineReducers({
  characters,
  detail,
  loading,
  failed
})
