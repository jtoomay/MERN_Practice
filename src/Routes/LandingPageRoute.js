import { redirect } from "react-router-dom"
import UserAPI from "../API/userAPI"
import { isErrorResponse } from "../Utilities/request"

export const LandingPageAction = async ({ request }) => {
  const formData = await request.formData()
  const { name, email } = Object.fromEntries(formData.entries()) // Convert FormData to regular JS Object

  const res = await UserAPI.createUser({ name, email })
  if (isErrorResponse(res)) throw res

  return redirect("/waitlist")
}
