// Footer.js

import React from 'react';

function Footer() {


  const current = new Date();

  return (
    <footer >
      <center className='footer'>&copy;{current.getFullYear()}</center>
    </footer>
  );
}

export default Footer;
