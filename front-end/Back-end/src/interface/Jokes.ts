import { Document } from "mongoose";

export default interface Jokes extends Document {
    jokes_id: number,
    content: string,
}