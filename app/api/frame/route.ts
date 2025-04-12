import { NextRequest } from "next/server";

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
