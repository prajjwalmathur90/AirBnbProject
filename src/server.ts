import express from "express";
import { serverConfig } from "./config/index.js";
import v1Router from "./router/v1/index.router.js";
import { genericErrorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/v1", v1Router);

app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
