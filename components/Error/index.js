import React from "react";

const TITLE = 'Error'

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      // Fallback page if url is entered incorrectly
      <h1>Error: Page does not exist!</h1>
    </div>
  );
};

export default Error;
