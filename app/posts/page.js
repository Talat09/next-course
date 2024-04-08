import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import Image from "next/image";
const Posts = async () => {
  const posts = await getAllPosts();
  const data = posts.data;
  console.log(data);
  return (
    <div>
      <h1>All Posts</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4  border-gray-600">
        {data.map((post) => (
          <Link key={post._id} href={`/posts/${post._id}`}>
            <div className="border-2 relative p-2 rounded-md w-full h-[400px] ">
              <Image
                src={post.image}
                alt={post.name}
                width={200}
                height={200}
              />

              <h1 className="text-2xl font-bold">{post.name}</h1>
              <p className="text-sm">{post.description}</p>
              <p className="text-sm">Price: ${post.price}</p>
              <p className="text-sm">Minimum_Order: {post.minOrder}</p>
              <p className="text-sm">Available: {post.available}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
