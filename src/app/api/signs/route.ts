import { models } from "mongoose";
import Signs from "../../../models/Signs";
import { connectToDB } from "../../../utils/database";

export const GET = async (request: any) => {
  try {
    await connectToDB();

    const signs = await Signs.find();

    return new Response(JSON.stringify(signs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
