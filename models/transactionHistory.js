import { Schema, model } from 'mongoose';

const transactionHistorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: 'Wallet',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
    type: String,
    enum: ['credit', 'debit'], // Only 'credit' or 'debit' are allowed values
    default: 'credit', // Default to 'credit' if not provided
    required: true,
},
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const TransactionHistory = model('TransactionHistory', transactionHistorySchema);

export default TransactionHistory;
