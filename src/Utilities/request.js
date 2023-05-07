export default async function request(url, options) {
  const modifiedOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
  }
  const response = await fetch(url, modifiedOptions)
  const data = await response.json()
  return data
}

export const isErrorResponse = (response) => !!response.error
