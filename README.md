# Energy Consumption and Generation Visualization Web Application

This project aims to develop a web application that visualizes energy consumption and generation data, providing users with insights into renewable energy usage and trends. Users can register, log in, and view personalized visualizations of energy data.

## Objective

The objective of this project is to create a user-friendly web application that allows users to:

- Register and log in securely.
- View personalized insights into energy consumption and generation trends.
- Interact with dynamic charts and graphs for visualizing energy data.
- Filter data by different energy sources and time frames.

## Implementation:

1. **User Authentication:**
   - Implemented user registration and login functionality.
   - Secured user passwords using proper hashing techniques, using bcrypt.
   - Used JWT (JSON Web Tokens) for handling authenticated sessions after login and logs out user as token expiry is set to 1 day.

2. **Front-End:**
   - Developed the user interface with React using Tailwind and Preline css, ensuring responsiveness across devices.
   - Directed users to the dashboard after successful login.
   - Included forms for user registration and login.
   - Implemented dynamic charts and graphs for visualizing energy data, with filters for different energy sources and time frames.

3. **Back-End:**
   - Used Python with Flask and SQLite3 to create a RESTful API.
   - Managed user authentication, energy data retrieval, and filtering by date range and energy source.
   - Stored user information and energy data securely in a database.

4. **Data Visualization:**
   - Integrated a JavaScript library HighCharts, Chart.js with React for creating interactive charts and graphs.
   - Different Axes charts helps in visualization and offer insights into consumption vs. generation trends, highlighting renewable energy contributions.

5. **Deployment:**
   - Included a Dockerfile for containerization to facilitate easy setup and deployment.
   - I made sure the application runs locally with setup instructions as below.

6. **AWS Deployment:**
   - Deployed the application and database to AWS using services like Elastic Beanstalk, EC2, RDS, or DynamoDB.
   - Implemented HTTPS to secure application access.

7. **Git CI/CD Pipeline:**
   - I have utilized Git for version control with structured commits.
   - Done the setup of CI/CD using GitHub Actions for automated testing and deployment.

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
   - cd Frontend/frontend
   - remove node_modules folder if exists.
   - run: npm install

4. **Install back-end dependencies**
   - Navigate to Backend Folder.
   - Run the command: pip install -r requirements.txt
   
5. **4.1 Start Frontend Server**
   - To start the React development server navigate to Frontend/frontend folder
   - Now, run: npm run dev
   
   **4.2 Start Backend Server**
   - To start the backend server navigate to Backend folder and follow below commands:
        - cd app
        - python run.py
   - To directly login use these credentials (which I already added into user table):
        - username: kiran
        - password: Zxcvb@0987
   - If you want run your own instance from scratch:
      - To create a db(like Users db in my case), insert necessary SQL commands and run:
           - cd app (If you are not in app folder)
           - python createdb.py (This creates a db named Users.db in same folder and also creates a table "user").
           - Now, to insert a record user record, you can manually send username, email and password in body of POST API (URL: localhost:<port_no>/register)
             using app like Postman API to mimic frontend registration (Because password will be hashed and stored in table).
           - Note: Don't use spaces in between while giving username.
      - To add dummy data, add data into energyData.csv which has following Columns:
           - timestamp (In UTC format)
           - username (unique and not null)
           - energy_source (Can be Solar, Wind, Hydro, Other).
           - consumption (Units in KWh)
           - generation (Units in KWh)
      - Once dummy data is added, run below command, to insert data into energy_data table:
           - cd app (If you are not in app folder)
           - python populate_db.py (Inserts csv data into energy_data table).
      - Now navigate to app folder and run run.py to start the Backend Server.


Note: The applications should now be running at two different ports (or a different port if specified, so please add the backend endpoint into the Utils file which is in the frontend's src folder).

## User Interface

The React-based user interface provides a responsive and user-friendly experience. Users can register, log in, and access the interactive dashboard where they can explore energy consumption and generation data through visually appealing charts and graphs. These visualizations offer insights into renewable energy usage trends, helping users make informed decisions regarding their energy consumption.

## API and Data Storage

The backend leverages Flask (a Python web framework) to create a RESTful API responsible for user authentication, data retrieval, and filtering. This API interacts with a secure database (specific instructions on database setup will be provided) to store user information and energy data.

## Deployment

The Dockerfile enables containerization for smooth deployment. Additionally, instructions will be provided for deploying the application and database to AWS services, ensuring scalability and security. HTTPS will be implemented to further enhance security during deployment.

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
