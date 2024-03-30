
# METAPHOTO Application

## Introduction

METAPHOTO is an innovative application developed to visualize photos along with their associated data in a user-friendly interface. This application enables users to browse through albums and user information effortlessly, with pagination functionality for smooth navigation. Additionally, METAPHOTO offers filter options based on title, email, or a combination of both, ensuring refined search results even with minimal input.

## Technologies Used

METAPHOTO is built using the following technologies:

- **ReactJS**: For the user interface development, providing a dynamic and responsive front-end experience.
- **NodeJS**: As the backend environment for handling API requests and managing server-side operations.
- **ExpressJS**: A fast and minimalist web framework for Node.js, used for building robust APIs.
- **HTML**: For structuring the web pages and presenting content.
- **CSS**: Utilized for styling and enhancing the visual appeal of the application.
- **POSTMAN**: To check data.
- **GITHUB**: To clone codes in repository.
- **Azure**: Deployed project to Cloud to generate public URL by CI/CD pipelines.
  - Public URLs:
    - [METAPHOTO Web App](https://metagallery.azurewebsites.net/)
    - [METAPHOTO API](https://metaphotoapi.azurewebsites.net//externalapi/photos/1)

## Development Process

### Setting Up the Environment

1. Install Visual Studio Code from [here](https://code.visualstudio.com/download).
2. Open Visual Studio Code and create a new project directory.

### Creating React App

#### React
1. Create a new React app using the following command:
   ```
   npx create-react-app Metaphoto_App-main
   ```
2. Navigate to the newly created directory:
   ```
   cd Metaphoto_App-main
   ```

#### Node.js
Run these commands to generate a folder inside Metaphoto_App-main:
   ```
   mkdir MetaPhotoApi                      
   cd MetaPhotoApi
   npm init -y
   npm install express --save
   ```

### Installing Dependencies

Ensure all required packages and dependencies are installed by running:
```
npm install
```

### Running the Application

Launch the application to build and open it in a web browser window:
```
npm start
```

### Backend Development

1. Develop APIs using Node.js and Express.js to handle requests and serve data.
2. Access JSON data from provided endpoints:
   - [Users Endpoint](https://jsonplaceholder.typicode.com/users)
   - [Photos Endpoint](https://jsonplaceholder.typicode.com/photos)
   - [Albums Endpoint](https://jsonplaceholder.typicode.com/albums)

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
   git commit -m 'New UI changes for photo album page'
   ```

6. **Push Changes to GitHub**:
   Finally, to push your changes to the GitHub repository, run the following command in the Terminal:
   ```
   git push origin main
   ```

Deployed codes to Azure cloud through CI/CD pipelines.

Application generated Screenshots:

<img width="1440" alt="Screenshot 2024-03-30 at 11 17 21 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/359fa86f-240f-46d1-8e52-e1ac5bc621d4"><img width="1440" alt="Screensh<img width="1440" alt="Screenshot 2024-03-30 at 11 33 50 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/1bfde2d1-3277-4c8e-b361-13aa7d993d2e">
ot 2024-03-30 at 11 25 36 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/e3409ed7-3dae-4ae3-b93c-0b794293a6f2">

<img width="1440" alt="Screenshot 2024-03<img width="1440" alt="Screenshot 2024-03-30 at 11 23 53 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/9aecae84-45ee-4e2b-9dbe-8b6ed1bf6f99">
-30 at 11 19 10 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/bcb13b4d-0436-4f84-b4a9-a5dc27353152">


<img width="1440" alt="Screenshot 2024-03-30 at 11 18 46 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/6deaeb29-3a5e-4173-aa56-5911736b019b">


## Usage

Upon running the application, users can:

- Visualize photos and associated data in the application UI.
- Navigate through albums and user information using pagination with limit and offset parameters.
- Implement filters for title, email, or a combination of both, providing refined search results.





