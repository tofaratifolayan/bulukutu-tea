//THIS SPINNER PAGE IS FOR THE SPINNING EFFECT WHEN A PAGE IS LOADING
import React from 'react'

export default function Spinner({
  className = '',
  variant = 'dark'
}) {
  return (
    <div
      className={"spinner-border text-" + variant + ' ' + className}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
