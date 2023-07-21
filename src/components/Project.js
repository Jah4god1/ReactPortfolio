// import React from 'react';

// const Project = ({ title, image, deployLink, repoLink }) => {
// return (
// <div>
// <p>..........................................</p>
// <h3>{title}</h3>&nbsp;&nbsp;
// <img src={image} alt={title} height='100' width='100'/>&nbsp;&nbsp;
// <a href={deployLink}>Deployed Application</a>&nbsp;&nbsp;
// <a href={repoLink}>GitHub Repository</a>
// </div>
// );
// };

// export default Project;

import React from 'react';

const Project = ({ title, image, deployLink, repoLink }) => {
return (
<div>

<h3>{title}</h3>&nbsp;&nbsp;
<img src={image} alt={title} height='100' width='100'/>&nbsp;&nbsp;
<a href={deployLink}>Deployed Application</a>&nbsp;&nbsp;
<a href={repoLink}>GitHub Repository</a>
</div>
);
};

export default Project;