import getPost from "@/lib/getPost";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const post = await getPost(id);
  console.log(post);
  return (
    <div className="mt-10 p-6">
      <h1 className="font-semibold text-2xl">{post.name}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
