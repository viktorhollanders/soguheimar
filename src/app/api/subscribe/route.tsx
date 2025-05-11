export async function POST(request: Request) {
    const body = await request.json();

    console.log(body);

    return new Response(JSON.stringify({ message: "response recived" }), {
        status: 200,
        headers: {
            Content_Type: "application/json",
        },
    });
}
