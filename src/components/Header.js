// import React from 'react';

// const Header = ({ title, image }) => {
//     return (
//     <div>
//     <p>.................................................................................</p>
//     <h1>Japheth Bruce</h1>
//     <img src="/images/project1.jpg" height='300' width='250'></img>

//     <h3>{title}</h3>&nbsp;&nbsp;
    
//     </div>
//     );
//     };

// export default Header;

import React from 'react';

const Header = () => {
return (
<header>
    <center>
<h1> Computer Science and Engineering</h1>
</center>
<h1>Japheth Bruce </h1>
    <table>
<tr><td padding-left= '30px'>
<img src="/images/project1.jpg" height='200' width='150'></img>
</td>
<td>
<h3>XML, HTML, CSS, JavaScript, Data Structures, Algorithms, Object-Oriented Programming, NodeJS, MySQL, MongoDB, React, NextJS, Java, Visual Studio Code, Microsoft Office Apps, ExpressJS, jQuery, Sequelize, Handlebars, MERN, Full-Stack Development
</h3>
</td>
</tr>
</table>
<hr></hr>
<h1 className="text-3xl font-bold mb-4">My Contact</h1>
        <p>
          Email: Japhethbruce93@gmail.com
          <br></br>
          linkedIn: www.linkedin.com/in/japheth-bruce-0b0276272
          <br></br>
          Github: https://github.com/Jah4god1
        </p>
</header>
);
};

export default Header;

