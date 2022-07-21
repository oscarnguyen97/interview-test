import mongoose, { Schema } from "mongoose";
import InVote from '../interface/Vote';

const VoteSchema: Schema = new Schema({
    funny: Number,
    not_funny: Number,
    jokes_id: Number
}, {
    timestamps: true,
    collection: 'Vote'
})


export default mongoose.model<InVote>('vote', VoteSchema)