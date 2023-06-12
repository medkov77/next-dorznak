import type { NextRequest, NextResponse } from "next/server";
import qs from "qs";
import Signs from "../../../models/Signs";
import { connectToDB } from "../../../utils/database";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const rawParams = request.url.split("?")[1];
  const params = qs.parse(rawParams);

  const { search } = params;
  console.log(search);
  try {
    await connectToDB();

    let signs = [];

    signs = await Signs.find({
      name: {
        $regex: new RegExp(search, "i"),
      },
    });

    return new Response(JSON.stringify({ signs: signs }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
