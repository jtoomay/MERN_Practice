import React from "react"
import { useWaitlistData } from "../Routes/WaitlistRoutes"

export default function WaitList() {
  const users = useWaitlistData()

  return (
    <div className="flex flex-col gap-8">
      {users.map(({ name, email, time }, index) => {
        return (
          <div key={email} className="flex flex-col gap-2">
            <p>{index + 1}</p>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        )
      })}
    </div>
  )
}
