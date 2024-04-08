export default async function getPost(id) {
  const result = await fetch(
    `https://tools-master-server.vercel.app/parts/${id}`
  );
  return result.json();
}
