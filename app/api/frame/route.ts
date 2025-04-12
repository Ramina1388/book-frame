import { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  return new Response(
    JSON.stringify({
      image: "https://book-frame.vercel.app/api/og",
      post_url: "https://book-frame.vercel.app/api/frame",
      buttons: ["Get Recommendations"],
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
