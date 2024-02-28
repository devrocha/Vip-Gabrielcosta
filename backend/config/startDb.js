import { connect } from "mongoose";
import { config } from "dotenv";

config()

export async function main() {
    await connect(process.env.DB_ACCESS);
}
