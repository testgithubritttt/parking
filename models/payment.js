
import { Schema as schema, model } from "mongoose";
const Schema = schema;
// Define Payment Schema
const paymentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    paid: {
        type: Boolean,
    },
    SlotParkedUser: {
        type: Schema.Types.ObjectId,
        ref: 'SlotParkedUser',
        required: true,
    },
});

const Payment = model('Payment', paymentSchema);
export default Payment;