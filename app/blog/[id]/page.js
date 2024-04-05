import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return <div>This is description of blog details page id: {id}.</div>;
};

export default page;
