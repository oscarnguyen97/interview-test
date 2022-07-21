import mongoose, { Schema } from "mongoose";
import Jokes from '../interface/Vote';

const JokesSchema: Schema = new Schema({
    jokes_id: { Type: Number },
    content: { Type: String }
}, {
    timestamps: true,
    collection: 'Jokes'
})

export default mongoose.model<Jokes>('jokes', JokesSchema)