export async function GET() {
  const response = await fetch("https://blog.yz13.dev/api/posts", {
    cache: "no-store",
  });

  const json = await response.json();

  return Response.json(json, { status: response.status });
}
