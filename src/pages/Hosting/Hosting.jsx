import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
// import { mdx } from '@mdx-js/react';

const Hosting = () => {
    const [mdxContent, setMdxContent] = useState([]);

  // Fetch the MDX content from the JSON file
  useEffect(
    () => {
        fetch('/graphics.json')
            .then(res => res.json())
            .then(data => setMdxContent(data.content))
            .catch(error => console.log(error))
    }
    , []);
    {
       
        console.log(mdxContent)
    }

  // Dynamically import MDX content and render it
//   const ContentComponent = mdxContent ? mdx`${mdxContent}` : null;

  return (
    <div>
      <h1>Accounting Software Details</h1>
      {
        <MDXProvider>
          {mdxContent}
        </MDXProvider>
      }
    </div>
  );
};

export default Hosting;