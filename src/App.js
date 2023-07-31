// import React from 'react';
// import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Project from './components/Project';
// import Contact from './components/Contact';


// const App = () => {
// return (

//  <body bgcolor='tan'> 
// <Navigation />
// <Header/>
// <Contact />
// <Project
// title="Ecommerce Database Application"
// deployLink="https://example.com/project1"
// repoLink="https://github.com/Jah4god1/e-commerce-website-13"
// />
// <Project
// title="Employee Tracking Database"
// deployLink="https://example.com/project2"
// repoLink="https://github.com/Jah4god1/Employee-Tracking-Database-12"
// />
// <Project
// title="Music Blogpost"
// deployLink="https://example.com/project2"
// repoLink="https://github.com/Jah4god1/Project-2-music-blogpost"
// />
// <Project
// title="Exercise Tracking Application"
// deployLink="https://example.com/project2"
// repoLink="https://github.com/michelleshanna92/Exerease"
// /> */

// {/* Add more projects as needed */}
// </body>
// );
// };

// export default App;

import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
return (
<body bgcolor='beige'> <div>
<Header
/>
{/* <Navigation 
Linkedin="www.linkedin.com/in/japheth-bruce-0b0276272"
Github="https://github.com/Jah4god1"
/> */}
{/* Your portfolio content goes here */}
<section id="portfolio">
    <center>
<h1>Portfolio</h1>
</center>
<table>
<th><td>
   
<Project
title="Employee Tracker System"
image="/images/developer1img.jpg"
repoLink="https://github.com/Jah4god1/Employee-Tracking-Database-12"
description1="Accomplished Database Application Development. Designed and maintained comprehensive MySQL database for an employee information tracking system. Utilized front-end development, data integration, security, and optimization. Ensured data accuracy, privacy, and seamless user experiences."
/>
</td>
</th>
</table>
<table>
    <th>
<td>
<Project
title="Note Taking System"
image="/images/notetakerimg.jpg"
repoLink="https://github.com/Jah4god1/note-taker-sqlllll"
description1="Developed a web-based database note-taking application using modern web technologies. The app allows users to create, organize, and manage notes efficiently while storing them in a secure and scalable database. It provides a user-friendly interface for seamless note-taking and retrieval."
/></td>
</th>

</table>
<table>
<th><td>
<Project
title="Exerease Exercise App"
image="/images/Exerease-port-pic.jpeg"
repoLink="https://github.com/michelleshanna92/Exerease"
description1="Implemented a full-stack web application for exercise tracking and fitness management using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Utilized Graphql and Apollo Client."
/>
</td>

</th>
</table>
{/* Add more projects as needed */}
</section>
<Footer />
</div></body>
);
};

export default App;