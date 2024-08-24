import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const Nav = () => {
  return (
    <>
    <div className="n-right">  <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn></div>
       
    </>
  )
}

export default Nav