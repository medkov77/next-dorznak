import { Schema, model, models } from "mongoose";

const SignSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gost: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    form: {
      type: String,
    },
    sizes: {
      type: Array,
      required: true,
    },
    films: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },

  {
    timeseries: true,
  }
);

const Signs = models.Signs || model("Signs", SignSchema);

export default Signs;
