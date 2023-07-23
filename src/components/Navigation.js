// import React from 'react';

// const Navigation = () => {
// return (
// <nav>
// <ul>
// <li>About Me</li>
// <li>Portfolio</li>
// <li>Contact</li>
// <li>Resume</li>
// </ul>
// </nav>
// );
// };

// export default Navigation;

import React from 'react';

const Navigation = ({ Linkedin, Github }) => {
return (


<nav>
        <h1 className="text-3xl font-bold mb-4">My Contact</h1>
       
         <h3> Email: Japhethbruce93@gmail.com</h3>
        <div>
         <a href={Linkedin}>Linkedin</a> </div>
         <div><a href={Github}>GitHub</a></div>
         

<ul>
{/* <h1 className="text-3xl font-bold mb-4">About Me</h1>
{/* <h3>XML, HTML, CSS, JavaScript, Data Structures, Algorithms, Object-Oriented Programming, NodeJS, MySQL, MongoDB, React, NextJS, Java, Visual Studio Code, Microsoft Office Apps, ExpressJS, jQuery, Sequelize, Handlebars, MERN, Full-Stack Development
</h3> */} 
</ul>
</nav>

);
};

export default Navigation;