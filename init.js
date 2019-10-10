import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhosst:${PORT}`);

app.listen(PORT, handleListening);