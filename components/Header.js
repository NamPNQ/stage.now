import React from 'react'
import Head from 'next/head'
import {style, insertRule} from 'next/css'

export default ({title}) => (
  <header>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 className={styles.h1}># STAGE</h1>
  </header>
)

insertRule(`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 0;
    color: #424242;
    font-size: 12px;
    font-family: Menlo, Monaco, Lucida Console, Courier New, monospace, serif;
    text-rendering: geometricPrecision;
  }

  a, a:visited {
    color: #424242;
    border-bottom: 1px solid #424242;
    text-decoration: none;
  }

  a:hover {
    border: none;
  }

  p {
    padding: 0;
    margin: 0;
    line-height: 2;
  }

  #__next {
    height: 100vh;
  }

  main {
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`)

const styles = {
  h1: style({
    fontSize: '13px',
    fontWeight: 700
  })
}
