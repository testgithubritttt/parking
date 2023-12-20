import { Schema as schema, model } from "mongoose";
const Schema = schema;
const areaSchema = new Schema({
  adminId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  siteAddress: [
    {
      areaName: {
        type: String,
        required: true,
      },
      totalSlots: {
        type: Number,
        required: true,
      },
    },
  ],
});

areaSchema.methods.addAddress = function (areaName, totalSlots) {
  this.siteAddress.push({ areaName, totalSlots });
  return this.save();
};

const Area = model('Area', areaSchema);

export default Area;