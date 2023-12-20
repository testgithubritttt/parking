import { Schema, model } from "mongoose";

const walletSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true, // Ensure uniqueness based on user
    },
    balance: {
        type: Number,
        default: 0,
    },
});

const Wallet = model('Wallet', walletSchema);

export default Wallet;
