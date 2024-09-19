import { ClerkProvider } from '@clerk/nextjs'
import { NextUIProvider } from '@nextui-org/system'
import React from 'react'
import Header from './_components/Header'

function Provider({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
    <NextUIProvider>
            {/*Header*/}
            <Header />
        {children}
    </NextUIProvider>
    </ClerkProvider>
  )
}

export default Provider