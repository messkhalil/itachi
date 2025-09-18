export class UserController {
    private userModel: any;

    constructor(userModel: any) {
        this.userModel = userModel;
    }

    public async createUser(req: any, res: any) {
        const { username, password } = req.body;
        try {
            const newUser = await this.userModel.create({ username, password });
            res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error });
        }
    }

    public async loginUser(req: any, res: any) {
        const { username, password } = req.body;
        try {
            const user = await this.userModel.findOne({ username });
            if (user && user.password === password) {
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } catch (error) {
            res.status(400).json({ message: 'Error logging in', error });
        }
    }
}