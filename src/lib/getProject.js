export async function getProjects() {
  try {
    const res = await fetch("http://localhost:3000/json/project.json", {
      next: { revalidate: 10 }, // ISR cache (optional)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Project Fetch Error:", error);
    return [];
  }
}
