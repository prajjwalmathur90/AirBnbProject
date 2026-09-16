import express from "express";
import { loadEnv, serverConfig } from "./config/index.js";
import pingRouter from "./router/v1/ping.router.js";

const app = express();

loadEnv();

app.use("/api/v1", pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
