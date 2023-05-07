import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return <div>{error.error}</div>
}

export default Error
