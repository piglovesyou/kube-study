// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getValue, setValue } from "../../lib/redis";

export default async function increment(req, res) {
  let curr = (await getValue("curr")) || 0;
  curr++;
  await setValue("curr", curr);
  res.status(200).json({ curr });
}
