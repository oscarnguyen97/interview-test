import { Document } from "mongoose";

export default interface Vote extends Document {
    funny: number,
    not_funny: number,
    jokes_id: number
}