import React from 'react'
import HashLoader from "react-spinners/HashLoader";

export default function Preloader() {
  return (
    <div className="z-[13000] fixed bg-black inset-0 w-full h-full grid place-items-center">
    <HashLoader
      color="	#E50914"
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    <p>Hashing...</p>
  </div>
  )
}
