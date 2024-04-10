export default async function getAllPosts() {
  try {
    const response = await fetch(
      "https://tools-master-server.vercel.app/parts"
    );
    if (!response.ok) {
      throw new Error(`HTTP Parts Fetching error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Handle the error gracefully, e.g., display an error message to the user
  }
}
