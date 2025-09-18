# Social Media Website

This project is a social media website that allows users to register, log in, and share images. It features a user-friendly interface with animations and attractive buttons, enhancing the user experience.

## Features

- User registration and login functionality
- Image uploading capabilities
- Responsive design with animations
- Organized structure with separate components for better maintainability

## Technologies Used

- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (or any other database of your choice)

## Project Structure

```
social-media-website
├── src
│   ├── server
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── userController.ts
│   │   ├── routes
│   │   │   └── userRoutes.ts
│   │   ├── models
│   │   │   └── userModel.ts
│   │   └── database
│   │       └── index.ts
│   ├── client
│   │   ├── components
│   │   │   ├── AnimatedButton.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── ImageUploader.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   └── Register.tsx
│   │   ├── styles
│   │   │   └── main.css
│   │   └── App.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd social-media-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm run start
   ```

5. Run the client:
   ```
   npm run client
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.