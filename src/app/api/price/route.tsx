import { models } from "mongoose";
import PriceList from "../../../models/PriceList";
import { connectToDB } from "../../../utils/database";

export const GET = async (request: any) => {
  try {
    await connectToDB();

    const price = await PriceList.find();

    return new Response(JSON.stringify(price), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
