import request from "../Utilities/request"

const URL = "localhost:3001/rest/users"

/**
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} name
 * @property {string} email
 * @property {Date} time
 */

/**
 * @typedef {Object} ErrorResponse
 * @property {string} error
 */

const UserAPI = {
  /**
   *
   * @returns {Promise<User[]> | Priomise<Error>}
   */
  getAll: async () => request(URL),
  /**
   *
   * @param {string} id
   * @returns {Promise<User> | Promise<ErrorResponse}
   */
  getUser: async (id) => request(`${URL}/${id}`),
  /**
   * @param {{
   * name: string,
   * email: string,
   * }} details
   * @returns {Promise<User> | Promise<ErrorResponse}
   */
  createUser: async ({ name, email }) => request(URL, { method: "POST", body: { name, email } }),
  /**
   * @param {string} id
   * @returns {Promise<{ message: 'User deleted' }> | Promise<ErrorResponse>'}}
   */
  deleteUser: async (id) => request(`${URL}/${id}`, { method: "DELETE" }),
}

export default UserAPI
