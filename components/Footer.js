import React from 'react';
import {style} from 'next/css';

const styles = {
  footer: style({
    marginTop: 'auto',
    marginBottom: '40px',
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#666',
    fontSize: '11px'
  })
};

export default () => (
  <footer className={styles.footer}>
    <span>
      built by <a href="https://github.com/amccloud">@amccloud</a>
      {' '}&{' '}
      <a href="https://github.com/zpnk">@zpnk</a>
    </span>
    <span>
      <a href="https://github.com/zpnk/stage-ci">source</a>
    </span>
  </footer>
);
