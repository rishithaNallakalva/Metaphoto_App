
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

1. Installed Visual Studio Code from [here](https://code.visualstudio.com/download).
2. Opened Visual Studio Code and create a new project directory.

### Creating React App

#### React
1. Creating a new React app using the following command:
   ```
   npx create-react-app Metaphoto_App-main
   ```
2. Navigating to the newly created directory:
   ```
   cd Metaphoto_App-main
   ```

#### Node.js
Ran these commands to generate a folder inside Metaphoto_App-main:
   ```
   mkdir MetaPhotoApi                      
   cd MetaPhotoApi
   npm init -y
   npm install express --save
   ```

### Installing Dependencies

Ensured all required packages and dependencies are installed by running:
```
npm install
```

### Running the Application

Launching the application to build and open it in a web browser window:
```
npm start
```

### Backend Development

1. Developing APIs using Node.js and Express.js to handle requests and serve data.
2. Accessed JSON data from provided endpoints:
   - [Users Endpoint](https://jsonplaceholder.typicode.com/users)
   - [Photos Endpoint](https://jsonplaceholder.typicode.com/photos)
   - [Albums Endpoint](https://jsonplaceholder.typicode.com/albums)

### Cloning Web Repository to GitHub

To clone a repository to your local machine or store your code on GitHub, followed these steps:

1. **Install Gitbash (Optional)**:
   I have developed in macOS and  to use Git Bash, I have installed it using the following command in your Terminal:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Git**:
    Installed it using Homebrew. Ran the following command in your Terminal:
   ```
   brew install git
   ```

3. **Clone the Repository**:
   Once Git is installed, navigated to the directory where you want to clone the repository using the Terminal. Then, use the following command to clone the repository:
   ```
   git clone <>
   ```

4. **Pulled Latest Changes**:(Making it as best practice).
   used pulling the latest changes from the repository, navigated to the repository directory using the Terminal and run:
   ```
   git pull origin main
   ```

5. **Commit Your Changes**:
   After making changes to  local repository, you need to commit those changes. Navigated to the repository directory using the Terminal and run:
   ```
   git add .
   git commit -m 'New UI changes for photo album page'
   ```

6. **Push Changes to GitHub**:
   Finally, to push your changes to the GitHub repository, run the following command in the Terminal:
   ```
   git push origin main
   ```

### Part 2: The Web Application                                                                                                                                                          
--Application generated Screenshots:
The default page displays various options, including filtration, pagination, and images, allowing users to interact with the application seamlessly. Upon reloading the page, users are presented with these features, facilitating easy navigation and exploration of the content.
<img width="1440" alt="Screenshot 2024-03-30 at 11 17 21 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/fe07754f-b8f7-4b99-8196-ebff0c49acae">

### Part 1: The API Endpoint
Problem 1.1: The data enrichment
An external API endpoint has been developed by integrating internal API endpoints. This consolidated endpoint retrieves photo information along with associated album and user details in a single API call. By leveraging existing internal API endpoints, we ensure efficient data retrieval while minimizing network overhead and improving user experience.
<img width="1440" alt="Screenshot 2024-03-30 at 10 35 30 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/4ba9dee4-3646-4fb4-a3dd-06bebd738a6a">

-https://metaphotoapi.azurewebsites.net//externalapi/photos?album.title=quidem&limit=10&offset=50
<img width="1440" alt="Screenshot 2024-03-30 at 1 55 43 PM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/2109ef28-8a92-4a3a-8c81-91d5d0051632">

<img width="1440" alt="Screenshot 2024-03-30 at 11 57 23 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/6c07993b-18a3-46fb-bc8a-ded25586bc45">

Problem 1.2: The filtering
1) Upon providing data in the filters and submitting the form, the application displays the filtered data in an organized manner.
<img width="1440" alt="Screenshot 2024-03-30 at 11 18 46 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/7cc9d100-5cdc-4538-9518-407977011f0d">

2) The filter functionality operates independently based on title, album title, and full email, allowing users to refine their search criteria precisely.
<img width="1440" alt="Screenshot 2024-03-30 at 11 19 10 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/d3c8b1ed-6b5f-4534-86e6-95f28683db67">

Problem 1.3: The pagination

1)The "pagesize" feature displays the number of items per page in the application, providing users with control over the amount of data visible at once.
<img width="1440" alt="Screenshot 2024-03-30 at 11 23 53 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/f677e7b9-67f6-46b7-85a4-8f3ab3491ba6">
2)The application includes functionality to specify start and end pages, allowing users to navigate through paginated data efficiently. Users can move to the next page or previous page to explore additional content, enhancing their browsing experience. This feature optimizes data presentation and facilitates seamless access to information across multiple pages.
 <img width="1440" alt="Screenshot 2024-03-30 at 11 25 36 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/09abab72-86e0-45ac-869f-c2336f368199">
 
 Extra Features on click Get username and Image when click on thumbnailurl in default page.
 <img width="1440" alt="Screenshot 2024-03-30 at 11 33 50 AM" src="https://github.com/rishithaNallakalva/Metaphoto_App/assets/165237917/fd2de239-f6cb-48a0-b8b5-4c868235fe65">

### Part 3: Extra Points
 
Implemented a CI/CD pipeline to deploy your project to the cloud provider.
--Public URLs:
1)  web application URL.
    - [METAPHOTO Web App](https://metagallery.azurewebsites.net/)
2)  External Api Endpoint URL.
    - [METAPHOTO API](https://metaphotoapi.azurewebsites.net//externalapi/photos/1)


--YAML files have been supplied to facilitate CI/CD deployments.
https://github.com/rishithaNallakalva/Metaphoto_App/tree/main/.github/workflows
--Deployed codes to Azure cloud through CI/CD pipelines.

## Conclusion:

In conclusion, MetaPhoto offers a reliable way for consumers to easily browse, organize, and examine photo collections. With its user-friendly interface, effective backend design, and Azure deployment, MetaPhoto guarantees a seamless and joyful experience. The software simplifies photo exploration and boosts speed with features like pagination, filtering, and unified API endpoints. MetaPhoto is an excellent example of how to employ contemporary web development tools to create a user-friendly and engaging solution for users to engage with their photo collections.






