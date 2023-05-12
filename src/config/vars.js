import { config } from "dotenv";

// import .env variables
config()

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
