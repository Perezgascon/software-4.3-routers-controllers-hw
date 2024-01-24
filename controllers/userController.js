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

//GET all users

getAllUsers = (req, res) => {
    try {
        res.send(user);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}


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

//Resgister

userRegister = (req, res) => {
    try {
        // Check if all required fields are present in the request body
        const requiredFields = ['username', 'email', 'password', 'name'];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            // If any required field is missing, return a 400 (Bad Request) response
            res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
            return;
        }

        // Check if the username or email already exists
        const existingUser = user.find(u => u.username === req.body.username || u.email === req.body.email);
        if (existingUser) {
            // If username or email already exists, return a 409 (Conflict) response
            res.status(409).json({ message: 'Username or email already exists' });
            return;
        }

        // If all checks pass, create a new user and add it to the array
        const newUser = {
            id: user.length + 1,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        };

        user.push(newUser);

        // Return a 201 (Created) response with the new user details
        res.status(201).json(newUser);
    } catch (error) {
        // If an error occurs, return a 500 (Internal Server Error) response
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getAllUsers,
    userLogin,
    userRegister
}
