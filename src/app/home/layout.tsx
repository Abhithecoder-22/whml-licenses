import { ThemeProvider } from '@/context/themeContext'
import React, { ReactNode } from 'react'

const HomeLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children} 
        </ThemeProvider>
    </div>
  )
}

export default HomeLayout
