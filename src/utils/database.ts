import mongoose from "mongoose";
import Signs from "@/models/Signs";
import PriceList from "@/models/PriceList";
import signsMock from "@/models/mock/signs.json";
import priceMock from "@/models/mock/priceList.json";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "dorznak",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
  const signs = await Signs.find();
  if (signs.length !== signsMock.length) {
    await createInitialEntity(Signs, signsMock);
  }
  const price = await PriceList.find();
  if (price.length !== priceMock.length) {
    await createInitialEntity(PriceList, priceMock);
  }
};

async function createInitialEntity(Model, data: object[]) {
  // if (Model.collection) {
  //   await Model.collection.drop();
  // }

  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);
        console.log(newItem);
        await newItem.save();

        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
