import { createClient } from "redis";
import { promisify } from "util";

const client = createClient({
  host: "my-redis",
  password: "a",
});

export const getValue = promisify(client.get).bind(client);
export const setValue = promisify(client.set).bind(client);
