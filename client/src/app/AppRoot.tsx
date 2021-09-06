import React, { useEffect } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { App } from './App'
import image from './assets/social_media_recruitment.png'
import { theme } from './theme/theme'


export function AppRoot() {
  console.log('is Dark needs to have state!')
  const isDark = false;

  useEffect(() => {
    document.title = isDark ? `It's dark!` : `It's white!`
  }, [isDark])

  return (
    <ThemeProvider theme={{ ...theme, isDark }}>
      <Global
        styles={(props) => ({
          body: {
            background: props.isDark ? '#666' : `url(${image})`
          }
        })}
      />

      <App />
    </ThemeProvider>
  )
}
