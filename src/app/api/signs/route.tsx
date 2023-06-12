import type { NextRequest, NextResponse } from "next/server";
import qs from "qs";
import Signs from "../../../models/Signs";
import { connectToDB } from "../../../utils/database";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const rawParams = request.url.split("?")[1];
  const params = qs.parse(rawParams);

  const { page, limit, filter } = params;
  const skip = (page - 1) * limit;

  try {
    await connectToDB();
    const size = (await Signs.find()).length;
    let signs = [];

    signs = await Signs.find().limit(limit).skip(skip).exec();

    return new Response(JSON.stringify({ signs: signs, size: size }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all signs", { status: 500 });
  }
};
