# METAPHOTO Application

## Introduction

METAPHOTO is an innovative application developed to visualize photos along with their associated data in a user-friendly interface. This application enables users to browse through albums and user information effortlessly, with pagination functionality for smooth navigation. Additionally, METAPHOTO offers filter options based on title, email, or a combination of both, ensuring refined search results even with minimal input.

## Technologies Used

METAPHOTO is built using the following technologies:

- ReactJS : For the user interface development, providing a dynamic and responsive front-end experience.
- NodeJS: As the backend environment for handling API requests and managing server-side operations.
- ExpressJS: A fast and minimalist web framework for Node.js, used for building robust APIs.
- HTML: For structuring the web pages and presenting content.
- CSS: Utilized for styling and enhancing the visual appeal of the application.
- POSTMAN: To check data.
- GITHUB: To clone codes in repository.

## Development Process

### Setting Up the Environment

1. Install Visual Studio Code from [here](https://code.visualstudio.com/download).
2. Open Visual Studio Code and create a new project directory.

### Creating React App

1. Create a new React app using the following command:
   npx create-react-app Metaphoto_App-main
2. Navigate to the newly created directory:
   cd Metaphoto_App-main

### Installing Dependencies

Ensure all required packages and dependencies are installed by running:
npm install


### Running the Application

Launch the application to build and open it in a web browser window:

npm start

### Backend Development

1. Develop APIs using Node.js and Express.js to handle requests and serve data.
2.  Access JSON data from provided endpoints:
   - (https://jsonplaceholder.typicode.com/users)
   - (https://jsonplaceholder.typicode.com/photos)
   - (https://jsonplaceholder.typicode.com/albums)
### Cloning Web Repository to GitHub

To clone a repository to your local machine or store your code on GitHub, follow these steps:

1. **Install Gitbash (Optional)**:
   If you're on macOS and want to use Git Bash, you can install it using the following command in your Terminal:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Git**:
   If Git is not already installed on your macOS system, you can install it using Homebrew. Run the following command in your Terminal:
   ```
   brew install git
   ```

3. **Clone the Repository**:
   Once Git is installed, navigate to the directory where you want to clone the repository using the Terminal. Then, use the following command to clone the repository:
   ```
   git clone <repository_url>
   ```

4. **Pull Latest Changes**:
   To pull the latest changes from the repository, navigate to the repository directory using the Terminal and run:
  ```
   git pull origin main
  ```

5. **Commit Your Changes**:
   After making changes to your local repository, you need to commit those changes. Navigate to the repository directory using the Terminal and run:
   ```
   git add .
   git commit -m 'Your commit message here'
  ```

6. **Push Changes to GitHub**:
   Finally, to push your changes to the GitHub repository, run the following command in the Terminal:

   ```
   git push origin main
  ```

## Usage
Upon running the application, users can:

- Visualize photos and associated data in the application UI.
- Navigate through albums and user information using pagination with limit and offset parameters.
- Implement filters for title, email, or a combination of both, providing refined search results.
- Enjoy a seamless browsing experience with the intuitive and responsive design.

## Conclusion

METAPHOTO offers a comprehensive solution for managing and exploring photos and related information. With its blend of ReactJS for dynamic UI and NodeJS/ExpressJS for robust backend support, METAPHOTO ensures an efficient and enjoyable user experience.
