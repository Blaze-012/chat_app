const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {"private-key": "Insert your private key"}
            }
        )

        return res.status(r.status).json(r.data)
    }
    catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data)
        } else {
            return res.status(500).json({ message: `${e}` })
        }
    }

//   return res.json({ username: username, secret: "xyz..." });
});

app.listen(3001);