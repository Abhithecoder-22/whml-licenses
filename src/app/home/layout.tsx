import { ThemeProvider } from '@/context/themeContext'
import React, { ReactNode } from 'react'
import CountryTrack from '@/context/countryTrack'

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
