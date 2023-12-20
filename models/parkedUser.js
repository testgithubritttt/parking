import { Schema as schema, model } from "mongoose";
const Schema = schema;
// Define SlotParkedUser Schema
const slotParkedUserSchema = new Schema({
    customId: {
        type: String,
        default: null, // Use the uuidv4 function as the default value
        unique: true,
    },
    vehiclenumber: {
        type: String,
        required: true,
    },
    vehicletype: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
    },
    parkingSlot: {
        type: Schema.Types.ObjectId,
        ref: 'Parkingslot', // Reference to the Parkingslot model
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const SlotParkedUser = model('SlotParkedUser', slotParkedUserSchema);

export default SlotParkedUser;