import { Schema as schema, model } from "mongoose";
const Schema = schema;
// Define Parkingslot Schema
const parkingslotSchema = new Schema({
    slotNumber: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    parkingid: {
        type: Schema.Types.ObjectId,
        ref: 'Area', // Assuming there's an 'Area' model
        required: true,
    },
});

const Parkingslot = model('Parkingslot', parkingslotSchema);
export default Parkingslot;