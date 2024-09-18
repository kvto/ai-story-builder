import { NextUIProvider } from '@nextui-org/system'
import React from 'react'

function Provider({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default Provider