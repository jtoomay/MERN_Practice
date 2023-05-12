export default async function request(url, options) {
  //* We have to make this so we can send the headers and body in the request
  const modifiedOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json", // * Without this, the server will not know what type of data we are sending
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
  }
  const response = await fetch(url, modifiedOptions)
  const data = await response.json()
  return data
}

export const isErrorResponse = (response) => !!response.error
