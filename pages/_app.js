import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider, ColorMode, Styled } from 'theme-ui'
import theme from '@rebass/preset'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ColorMode />
          <Styled.root>
            <Component {...pageProps} />
          </Styled.root>
        </ThemeProvider>
      </Container>
    )
  }
}
