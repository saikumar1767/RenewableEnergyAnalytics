# Energy Consumption and Generation Visualization Web Application Documentation

This project aims to develop a web application that visualizes energy consumption and generation data, providing users with insights into renewable energy usage and trends. Users can register, log in, and view personalized visualizations of energy data. 

Live at: https://renewable.fit

username: saikumar

password: Zxsae@1001

## Objective

The objective of this project is to create a user-friendly web application that allows users to:

- Register and log in securely.
- View personalized insights into energy consumption and generation trends.
- Interact with dynamic charts and graphs to visualize energy data.
- Filter data by different energy sources and time frames.

## Implementation:

1. **User Authentication:**
   - Implemented user registration and login functionality.
   - Secured user passwords using proper hashing techniques, using bcrypt.
   - I used JWT (JSON Web Tokens with HS256 encoding algorithm) to handle authenticated sessions after login and logging out to the user as token expiry is set to 1 day.

2. **Front-End:**
   - Developed the user interface with React using Preline UI and Tailwind CSS, ensuring device responsiveness.
   - Directed users to the dashboard after successful login.
   - Forms for user registration and login are included.
   - Implemented dynamic charts and graphs for visualizing energy data, with filters for different energy sources and time frames.

3. **Back-End:**
   - Used Python with Flask and SQLite3 to create a RESTful API.
   - Managed user authentication, energy data retrieval, and filtering by date range and energy source.
   - Stored user information and energy data securely in a database.

4. **Data Visualization:**
   - Integrated a JavaScript library, HighCharts, Chart.js with React for creating interactive charts and graphs.
   - Different Axes charts help in visualization and offer insights into consumption vs. generation trends, highlighting renewable energy contributions.

5. **Deployment:**
   - Two Dockerfiles and a docker-compose file for containerization were included to facilitate easy setup and deployment.
   - I made sure the application runs locally with the setup instructions below.

6. **AWS Deployment:**
   - Deployed the application and server to AWS using services like Elastic Beanstalk, EC2, S3, Route 53, and CloudFront.
   - Implemented HTTPS to secure application access.

7. **Git CI/CD Pipeline:**
   - I have utilized Git for version control with structured commits.
   - The setup of CI/CD using GitHub Actions for automated testing and deployment is done.

## Installation and Setup

### Prerequisites

- Node.js and npm installed globally
- Python installed
- Docker installed (optional for local setup)
- AWS account (for AWS deployment)

### Local Setup

1. **Clone the repository:**

   - git clone https://github.com/your_username/energy-visualization-app.git
   - Clone this repository.
   - Install dependencies

2. **Install front-end dependencies**
   - cd frontend
   - remove the node_modules folder if it exists.
   - run: npm install

4. **Install back-end dependencies**
   - Navigate to the Backend Folder.
   - Run the command: pip install -r requirements.txt
   
5. **4.1 Start Frontend Server**
   - To start the React development server, navigate to the Frontend/frontend folder
   - Now, run: npm start
   
   **4.2 Start Backend Server**
   - To start the backend server, navigate to the Backend folder and follow the below commands:
        - python run.py
   - To directly login, use these credentials (which I already added to the user table):
        - username: saikumar
        - password: Zxsae@1001
   - If you want to run your instance from scratch:
      - To create a DB(like Users db in my case), insert necessary SQL commands and run:
           - cd app (If you are not in the app folder)
           - python createdb.py (This creates a db named Users.db in the same folder and also creates a table "user").
           - Now, to insert a record user record, you can manually send a username, email, and password in the body of POST API (URL: localhost:<port_no>/register)
             Using an app like Postman API to mimic frontend registration (Because the password will be hashed and stored in a table).
           - Note: Don't use spaces in between while giving a username.
      - To add dummy data, add data into energyData.csv, which has the following Columns:
           - timestamp (In UTC format)
           - username (unique and not null)
           - energy_source (Can be Solar, Wind, Hydro, Other).
           - consumption (Units in KWh)
           - generation (Units in KWh)
      - Once dummy data is added, run the below command to insert data into the energy_data table:
           - cd app (If you are not in the app folder)
           - python populate_db.py (Inserts csv data into energy_data table).
      - Now navigate to the app folder and run.py to start the Backend Server.

6. **Deployment using Docker**
   - Create two docker files, one inside the frontend folder for dockerizing the application's frontend and a second docker file inside the Backend folder for dockerizing the application's backend.
   - Next, create the docker-compose file directly under the root folder (in the same directory as this README file).
   - To run locally, I have installed the docker desktop and opened the command prompt, pointed it to the root directory, where the docker-compose file is located, and run the below commands:
        - docker-compose build (To build the docker images with docker files located in the frontend and backend folder as mentioned in the docker-compose file).
        - docker-compose up (To build and start the containers from images created as mentioned in the docker-compose.yml file).
        - If you are getting any errors in the frontend, try to remove the node_modules folder and package-lock.json and try to re-install packages using npm install and then docker commands (both build & up).
        - If ports are not changed, then the frontend service will be up and running on localhost port 3000, and the backend service will be up and running on localhost port 5000.
   Note: Make sure ports 3000 and 5000 are not used by any other service on your PC.

7. **AWS Deployment**
   - I have deployed the backend (Python-Flask) onto the AWS Elastic Beanstalk, which used the nginx server.
   - The front end was deployed onto the AWS S3 Bucket and the AWS CloudFront.
   - I used Route 53 to enable HTTPS using the SSL certificates for the domain I bought.
   - Now, both frontend and backend are deployed onto AWS; one can access the application at the URL: https://renewable.fit
   - I added multiple resources as I approached deploying on AWS.

Note: In localhost, The applications should run at two different ports (or a different port if specified, so please add the backend endpoint into the Utils file in the frontend's src folder).

## User Interface

The React-based user interface provides a responsive and user-friendly experience. Users can register, log in, and access the interactive dashboard to explore energy consumption and generation data through visually appealing charts and graphs. These visualizations offer insights into renewable energy usage trends, helping users make informed decisions regarding their energy consumption.

## API and Data Storage

The backend leverages Flask (a Python web framework) to create a RESTful API responsible for user authentication, data retrieval, and filtering. This API uses a secure database to store user information and energy data.

## Deployment

The Dockerfile enables containerization for smooth deployment. I've shared the instructions above for deploying the application and server to AWS services to ensure they are secure. HTTPS is implemented to enhance protection during deployment.

## Git CI/CD

This project adheres to best practices by utilizing Git for version control and maintaining a structured commit history. A CI/CD pipeline using GitHub Actions is planned for automated testing and deployment, streamlining the process.

## Resources

   - React: https://react.dev/
   - Tailwind CSS: https://tailwindcss.com/docs/installation
   - Preline CSS: https://preline.co/
   - Flask: https://flask.palletsprojects.com/
   - Docker: https://docs.docker.com/
   - AWS: https://aws.amazon.com/
   - Git: https://git-scm.com/
   - GitHub Actions: https://docs.github.com/actions
   - GitLab CI/CD: https://docs.gitlab.com/ee/ci/
   - Chart.js: https://www.chartjs.org/docs/latest/getting-started/
   - Highcharts: https://www.highcharts.com/
   - https://www.youtube.com/watch?v=7djMZ5OTG_E
   - https://www.youtube.com/watch?v=2BoVhej0QVI
   - https://www.youtube.com/watch?v=eZOzTFOMh0I&t=1s
   - https://www.youtube.com/watch?v=XOTsSJ8EOoY&t=886s
   - https://www.youtube.com/watch?v=vpUwv8_w9GQ
   - https://www.youtube.com/watch?v=ookzXuMr8eY
   - https://www.youtube.com/watch?v=N-gzLmYLRRk
   - https://www.youtube.com/watch?v=uWQ48da0UOc
