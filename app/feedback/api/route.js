export async function GET(request) {
  return new Response(JSON.stringify({ message: "OKK" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
