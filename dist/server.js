import express from "express";
const app = express();
const PORT = 3000;
app.get("/ping", (_req, res) => {
    res.send("pong!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map