const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.get("/api/price", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT"
        );

        res.json({
            price: parseFloat(response.data.price),
            symbol: "SOLUSDT",
            time: Date.now()
        });

    } catch (error) {
        res.status(500).json({ error: "Error getting price" });
    }
});

app.get("/api/candles", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.binance.com/api/v3/klines?symbol=SOLUSDT&interval=1m&limit=50"
        );

        const candles = response.data.map(c => ({
            open: parseFloat(c[1]),
            high: parseFloat(c[2]),
            low: parseFloat(c[3]),
            close: parseFloat(c[4])
        }));

        res.json(candles);

    } catch (error) {
        res.status(500).json({ error: "Error getting candles" });
    }
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
