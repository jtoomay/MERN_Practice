import { useLoaderData } from "react-router-dom"
import UserAPI from "../API/userAPI"
import { isErrorResponse } from "../Utilities/request"

export const waitlistLoader = async () => {
  const res = await UserAPI.getAll()
  if (isErrorResponse(res)) throw res

  return res
}
/** *
 * @returns {import("../API/userAPI").User[]}
 */
export const useWaitlistData = () => useLoaderData()
