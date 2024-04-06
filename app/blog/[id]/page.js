import { notFound } from "next/navigation";
const page = ({ params }) => {
  const { id } = params;
  if (id === "4") {
    notFound();
  }
  return <div>This is description of blog details page id: {id}.</div>;
};

export default page;
