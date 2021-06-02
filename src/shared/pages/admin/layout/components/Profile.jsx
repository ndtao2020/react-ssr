import React, { useState } from "react"
import { useSelector } from "react-redux"
import { userSelector } from "../../redux/selector"

export default function LogoHeader() {
  const {
    user: { name, idAvartar, authorities },
  } = useSelector(userSelector)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="user">
      <div className="avatar-sm float-left mr-2">
        {idAvartar && <img src={idAvartar} alt="123" />}
      </div>
      <div className="info">
        <div href="/col" onClick={() => setIsOpen(!isOpen)}>
          <span>
            {name || ""}
            <span className="user-level">
              {authorities ? authorities.join(", ") : ""}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
