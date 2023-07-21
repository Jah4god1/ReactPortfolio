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
<Navigation 
Linkedin="www.linkedin.com/in/japheth-bruce-0b0276272"
Github="https://github.com/Jah4god1"
/>
{/* Your portfolio content goes here */}
<section id="portfolio">
<h2>Portfolio</h2>
<table>
<th><td>
<Project
title="Employee Tracker System"
image="/images/project1.png"
repoLink="https://github.com/Jah4god1/Employee-Tracking-Database-12"
/>
</td>
<td>
<Project
title="Note Taking System"
image="/images/project2.jpg"
repoLink="https://github.com/Jah4god1/note-taker-sqlllll"
/></td>
</th>
</table>
{/* Add more projects as needed */}
</section>
<Footer />
</div></body>
);
};

export default App;