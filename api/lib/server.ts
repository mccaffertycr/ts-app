import app from "./app";
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`express api server listening on port: ${PORT}`);
})