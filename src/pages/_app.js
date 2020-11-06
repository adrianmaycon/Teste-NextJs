import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import GlobalStyle from '../styles/global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <GlobalStyle />
        <Head>
          <title>Kickante</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}