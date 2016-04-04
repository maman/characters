import sources from 'data/sources'

export const CHARACTER_LIST_REQUEST = 'CHARACTER_LIST_REQUEST'
export const CHARACTER_LIST_SUCCESS = 'CHARACTER_LIST_SUCCESS'
export const CHARACTER_LIST_FAILURE = 'CHARACTER_LIST_FAILURE'

export const CHARACTER_GET_REQUEST = 'CHARACTER_GET_REQUEST'
export const CHARACTER_GET_SUCCESS = 'CHARACTER_GET_SUCCESS'
export const CHARACTER_GET_FAILURE = 'CHARACTER_GET_FAILURE'

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
    sources.get(id)
    .then(({ data }) => {
      dispatch(getLoaded(data))
    })
    .catch((error) => {
      dispatch(getFailed(error))
    })
  }
}

export function getLoading () {
  return {
    type: CHARACTER_LIST_REQUEST
  }
}

export function getLoaded (data) {
  return {
    type: CHARACTER_LIST_SUCCESS,
    data
  }
}

export function getFailed (error) {
  return {
    type: CHARACTER_LIST_FAILURE,
    error
  }
}
