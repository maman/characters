import http from 'axios'
const api = 'http://swapi.co/api'

export default {
  /**
   * Get all available Characters
   *
   * @method     list
   * @return     {Promise}
   */
  list: (page = 1) => {
    return http.get(`${api}/people/?page=${page}`)
  },

  /**
   * Get character detail by Character ID
   *
   * @method     get
   * @param      {String}  id      Character ID to get detail from
   * @return     {Promise}
   */
  get: (id) => {
    return http.get(`${api}/people/${id}`)
  },

  /**
   * Load additional data
   *
   * @method     loadAdditional
   * @param      {String}  url     URL to load data from
   * @return     {Promise}
   */
  loadAdditional: (url) => {
    return http.get(url)
  }
}
