# ITunes App

## Table of Contents

1. [How to Use the App](#how-to-use-the-app)
2. [Helmet - Security Measures](#helmet-security-measures)
3. [Installing and Running the App](#installing-and-running-the-app)

## How to Use the App

To use the ITunes App, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Install the required dependencies by running `npm install`.
4. Start the server by running `npm start`.
5. Open a web browser and go to [http://localhost:3000/](http://localhost:3000/).
6. Use the search form to search for music tracks, books, or software.
7. Click the "Add to Favorites" button on any search result to add it to your favorites list.
8. Click the "x" button next to any item in your favorites list to remove it.

## Helmet - Security Measures

The back-end of the application uses the Helmet middleware to set the X-Frame-Options header to SAMEORIGIN, preventing clickjacking attacks by ensuring that the website can only be embedded in frames on pages from the same origin. The middleware also sets the Content-Security-Policy header to restrict the sources of certain types of content, allowing resources to be loaded from the same origin, and inline scripts with the 'unsafe-inline' keyword.

## Installing and Running the App

To install and run the app on your local machine, follow these steps:

1. Clone the project repository from GitHub: `git clone https://github.com/Lieben5704/ITunes_Capstone.git`
2. Navigate to the project directory: `cd repo`
3. Installation: `npm install && cd frontend && npm install`
4. Start the app: `npm start && cd frontend && npm start`
5. Open your web browser and go to [http://localhost:3000/](http://localhost:3000/).
