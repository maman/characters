import http from 'axios'
import { CHARACTERS as charactersEndpoint } from 'config'

export default {
  /**
   * Get all available Characters
   *
   * @method     list
   * @return     {Promise}
   */
  list: (page = 1) => {
    return http.get(`${charactersEndpoint}/?page=${page}`)
  },

  /**
   * Get character detail by Character ID
   *
   * @method     get
   * @param      {String}  id      Character ID to get detail from
   * @return     {Promise}
   */
  get: (id) => {
    return http.get(`${charactersEndpoint}/${id}`)
  }
}
