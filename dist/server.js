import express from "express";
import { loadEnv, serverConfig } from "./config/index.js";
const app = express();
loadEnv();
app.get("/ping", (_req, res) => {
    res.send("pong!");
});
app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
});
//# sourceMappingURL=server.js.map