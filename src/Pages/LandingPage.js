import React from "react"
import { Form } from "react-router-dom"

export default function LandingPage() {
  return (
    <Form method="POST">
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </Form>
  )
}
