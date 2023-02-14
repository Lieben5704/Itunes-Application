#Level 2 - Capstone - ITunes_App

## How to Use the App

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Install the required dependencies by running npm install.
4. Start the server by running npm start.
5. Open a web browser and go to http://localhost:3000/.
6. Use the search form to search for music tracks, books, or software.
7. Click the "Add to Favorites" button on any search result to add it to your favorites list.
8. Click the "x" button next to any item in your favorites list to remove it.

## Security Measures

- We have used the helmet middleware to secure our Express app by setting various HTTP headers that protect against attacks such as cross-site scripting (XSS) and clickjacking.
- We have stored API keys in environment variables and used the dotenv package to load them into our app at runtime. This prevents sensitive information from being committed to version control.
- We have rate-limited requests to the iTunes API to prevent abuse or accidental overload of their service. This was done using the express-rate-limit middleware.
- We have also implemented input validation and sanitation to prevent against common security vulnerabilities such as SQL injection and cross-site scripting (XSS).


## Installing and Running the App
### To install and run the app on your local machine, follow these steps:

1. Clone the project repository from GitHub: git clone https://github.com/username/repo.git
2. Navigate to the project directory: cd repo
3. Install the app dependencies: npm install
4. Start the app: npm start
5. Open your web browser and go to http://localhost:3000


