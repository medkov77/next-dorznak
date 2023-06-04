import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    form: {
      type: Object,
    },
  },

  {
    timeseries: true,
  }
);

const PriceList = models.PriceList || model("PriceList", schema);

export default PriceList;
