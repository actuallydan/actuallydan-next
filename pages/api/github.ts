import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@planetscale/database";

const dbConfig = {
  url: process.env["DATABASE_URL"],
};

const conn = connect(dbConfig);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    conn.execute("INSERT INTO Visitor (data, destination) VALUES (?, ?);", [
      JSON.stringify({
        ip: req.socket.remoteAddress,
        proxyIp: req.headers["x-forwarded-for"] || "",
        userAgent: req.headers["user-agent"],
        cookies: req.cookies,
      }),
      "https://github.com/actuallydan",
    ]);
  } catch (err) {
    console.info("error", err);
  }

  res.redirect("https://github.com/actuallydan");
}
