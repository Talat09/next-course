export default async function getPost(id) {
  try {
    const response = await fetch(
      `https://tools-master-server.vercel.app/parts/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP Part Fetching error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {}
}
