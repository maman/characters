import sources from 'data/sources'

export const CHARACTER_LIST_REQUEST = 'CHARACTER_LIST_REQUEST'
export const CHARACTER_LIST_SUCCESS = 'CHARACTER_LIST_SUCCESS'
export const CHARACTER_LIST_FAILURE = 'CHARACTER_LIST_FAILURE'

export const CHARACTER_GET_REQUEST = 'CHARACTER_GET_REQUEST'
export const CHARACTER_GET_SUCCESS = 'CHARACTER_GET_SUCCESS'
export const CHARACTER_GET_FAILURE = 'CHARACTER_GET_FAILURE'

export const LOAD_ADDITIONAL_REQUEST = 'LOAD_ADDITIONAL_REQUEST'
export const LOAD_ADDITIONAL_SUCCESS = 'LOAD_ADDITIONAL_SUCCESS'
export const LOAD_ADDITIONAL_FAILURE = 'LOAD_ADDITIONAL_FAILURE'

export const CHARACTER_CLEAR = 'CHARACTER_CLEAR'
export const SAVE_SCROLL_POSITION = 'SAVE_SCROLL_POSITION'

/**
 * List available characters
 */
export function list (page = 1) {
  return (dispatch) => {
    dispatch(listLoading())
    sources.list(page)
    .then(({ data }) => {
      dispatch(listLoaded(data))
    })
    .catch((error) => {
      dispatch(listFailed(error))
    })
  }
}

export function listLoading () {
  return {
    type: CHARACTER_LIST_REQUEST
  }
}

export function listLoaded (data) {
  return {
    type: CHARACTER_LIST_SUCCESS,
    data
  }
}

export function listFailed (error) {
  return {
    type: CHARACTER_LIST_FAILURE,
    error
  }
}

/**
 * Get character detail
 */
export function get (id) {
  return (dispatch) => {
    dispatch(getLoading())
    return sources.get(id)
  }
}

export function getFromCache (data) {
  return (dispatch) => {
    return new Promise((resolve) => {
      resolve(dispatch(getLoaded(data)))
    })
  }
}

export function getLoading () {
  return {
    type: CHARACTER_GET_REQUEST
  }
}

export function getLoaded (data) {
  return {
    type: CHARACTER_GET_SUCCESS,
    data
  }
}

export function getFailed (error) {
  return {
    type: CHARACTER_GET_FAILURE,
    error
  }
}

/**
 * Get additional Details
 */
export function getAdditional (url, additional, idx) {
  return (dispatch) => {
    dispatch(additionalLoading(idx, additional))
    sources.loadAdditional(url)
    .then(({ data }) => {
      dispatch(additionalLoaded(data, additional, idx))
    })
    .catch((error) => {
      dispatch(additionalFailed(error, additional, idx))
    })
  }
}

export function additionalLoading (id, section) {
  return {
    type: LOAD_ADDITIONAL_REQUEST,
    id,
    section
  }
}

export function additionalLoaded (data, section, id) {
  return {
    type: LOAD_ADDITIONAL_SUCCESS,
    data,
    section,
    id
  }
}

export function additionalFailed (error, section, id) {
  return {
    type: LOAD_ADDITIONAL_FAILURE,
    error,
    section,
    id
  }
}

export function clearDetail () {
  return {
    type: CHARACTER_CLEAR
  }
}

export function savePosition (position) {
  return {
    type: SAVE_SCROLL_POSITION,
    position
  }
}
