// app/api/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userId = process.env.INSTAGRAM_USER_ID;
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!userId || !accessToken) {
      console.error("Missing INSTAGRAM env vars");
      return NextResponse.json(
        { error: "Missing INSTAGRAM_USER_ID or INSTAGRAM_ACCESS_TOKEN" },
        { status: 500 }
      );
    }

    const fields =
      "id,username,name,profile_picture_url,media.limit(20){id,caption,media_url,media_type,thumbnail_url,permalink}";

    const params = new URLSearchParams({
      fields,
      access_token: accessToken,
    });

    const url = `https://graph.instagram.com/${userId}?${params.toString()}`;

    const igRes = await fetch(url);
    const igData = await igRes.json();

    if (!igRes.ok || igData.error) {
      console.error("Instagram API returned error:", igData.error);
      return NextResponse.json(
        { error: igData.error || "Instagram API Error" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      profile: {
        username: igData.username,
        name: igData.name || "",
        picture: igData.profile_picture_url,
        link: `https://instagram.com/${igData.username}`,
      },
      posts: igData.media?.data || [],
    });
  } catch (error) {
    console.error("Instagram API route error:", error);
    return NextResponse.json(
      { error: "Instagram API Error" },
      { status: 500 }
    );
  }
}
