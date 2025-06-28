import { Client, Databases } from "appwrite";

const client = new Client();
const DB_ID = "685f94b3002b71205a81";
const COLLECTION_ID = "685f952e0011a657b166";

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("685f94340003b0bd9641");

export const databases = new Databases(client);

export { client, DB_ID, COLLECTION_ID };
