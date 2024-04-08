export default async function getAllPosts() {
  const result = await fetch("https://tools-master-server.vercel.app/parts");
  return result.json();
}
