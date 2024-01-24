const user = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

// Login
userLogin = (req, res) => {
    try {
        const inputUsername = req.body.username;
        const inputPassword = req.body.password;

        const userMatch = user.find(u => u.username === inputUsername && u.password === inputPassword);

        if (userMatch) {
            console.log("Login successful");
            res.status(200).json({ message: "Login successful" });
        } else {
            console.log("Login failed");
            res.status(401).json({ message: "Login failed" });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    userLogin
}
