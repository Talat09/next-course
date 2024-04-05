import { Span } from "next/dist/trace";
import Link from "next/link";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Programming",
      author: "John Smith",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-03-28",
      tags: ["programming", "coding", "software"],
    },
    {
      id: 2,
      title: "Exploring the Universe",
      author: "Jane Doe",
      content:
        "In this blog post, we delve into the mysteries of the cosmos...",
      date: "2024-03-30",
      tags: ["astronomy", "space", "science"],
    },
    {
      id: 3,
      title: "Healthy Living Tips",
      author: "Alice Johnson",
      content:
        "Maintaining a healthy lifestyle is crucial for overall well-being...",
      date: "2024-03-31",
      tags: ["health", "fitness", "wellness"],
    },
  ];

  console.log(blogs);

  return (
    <>
      <div className="grid lg:grid-cols-3   text-white mt-10 gap-10 mx-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border-2 border-gray-600 p-5 bg-black rounded-md"
          >
            <h2 className="text-3xl">{blog.title}</h2>
            <p className="text-xl">{blog.content}</p>
            <p>{blog.date}</p> <h4>By {blog.author}</h4>
            {blog.tags.map((tag, i) => (
              <p key={i} className=" ">
                <span className="bg-green-400 px-3  text-white">{tag}</span>
              </p>
            ))}
            <Link href={`/blog/${blog.id}`}>
              <button className="bg-green-600 text-white mt-5 p-5 rounded-md">
                Blog Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
