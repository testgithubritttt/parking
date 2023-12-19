import { Schema as schema, model } from "mongoose";
const Schema = schema;

const walletSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
});

const Wallet = model('Wallet', walletSchema);

export default Wallet;
