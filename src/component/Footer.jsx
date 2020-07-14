import React from 'react';


function Footer(){
    const d = new Date();
    const h = d.getFullYear();
    return <footer>
        <p> © copyright {h}</p>
    </footer>
}

export default Footer;