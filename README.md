# Energy Consumption and Generation Visualization Web Application

This project is aimed at developing a web application that visualizes energy consumption and generation data, providing users with insights into renewable energy usage and trends. Users can register, log in, and view personalized visualizations of energy data.

## Objective

The objective of this project is to create a user-friendly web application that allows users to:

- Register and log in securely.
- View personalized insights into energy consumption and generation trends.
- Interact with dynamic charts and graphs for visualizing energy data.
- Filter data by different energy sources and time frames.

## Minimum Requirements

1. **User Authentication:**
   - Implement user registration and login functionality.
   - Secure user passwords using proper hashing techniques.
   - Use JWT (JSON Web Tokens) or sessions for handling authenticated sessions after login.

2. **Front-End:**
   - Develop the user interface with React, ensuring responsiveness across devices.
   - Direct users to the dashboard after successful login.
   - Include forms for user registration and login.
   - Implement dynamic charts and graphs for visualizing energy data, with filters for different energy sources and time frames.

3. **Back-End:**
   - Use Python with Flask to create a RESTful API.
   - Manage user authentication, energy data retrieval, and filtering by date range and energy source.
   - Store user information and energy data securely in a database.

4. **Data Visualization:**
   - Integrate a JavaScript library (like HighCharts, D3.js, or Chart.js) with React for creating interactive charts and graphs.
   - Visualizations should offer insights into consumption vs. generation trends, highlighting renewable energy contributions.

5. **Deployment:**
   - Include a Dockerfile for containerization to facilitate easy setup and deployment.
   - Ensure the application runs locally with setup instructions.

6. **AWS Deployment:**
   - Deploy the application and database to AWS using services like Elastic Beanstalk, EC2, RDS, or DynamoDB.
   - Implement HTTPS to secure application access.

7. **Git CI/CD Pipeline:**
   - Utilize Git for version control with structured commits.
   - Setup CI/CD using GitHub Actions or GitLab CI/CD for automated testing and deployment.

## Installation and Setup

### Prerequisites

- Node.js and npm installed globally
- Python installed
- Docker installed (optional for local setup)
- AWS account (for AWS deployment)

### Local Setup

1. **Clone the repository:**

```bash
git clone https://github.com/your_username/energy-visualization-app.git

Clone this repository.

Install dependencies:

```bash
cd energy-viz-app
npm install  # or yarn install
pip install -r requirements.txt```

Start the development server:

```bash
npm start
Use code with caution.
(or yarn start)```

The application should now be running at http://localhost:3000 (or a different port if specified).

## User Interface

The React-based user interface provides a responsive and user-friendly experience. Users can register, log in, and access the interactive dashboard where they can explore energy consumption and generation data through visually appealing charts and graphs. These visualizations offer insights into renewable energy usage trends, helping users make informed decisions regarding their energy consumption.

## API and Data Storage

The backend leverages Flask (a Python web framework) to create a RESTful API responsible for user authentication, data retrieval, and filtering. This API interacts with a secure database (specific instructions on database setup will be provided) to store user information and energy data.

## Deployment

The Dockerfile enables containerization for smooth deployment. Additionally, instructions will be provided for deploying the application and database to AWS services, ensuring scalability and security. HTTPS will be implemented to further enhance security during deployment.

## Git CI/CD

This project adheres to best practices by utilizing Git for version control and maintaining a structured commit history. A CI/CD pipeline using GitHub Actions or GitLab CI/CD is planned for automated testing and deployment, streamlining the development process.

## Contributing

We welcome contributions to this project! Feel free to fork the repository, make changes, and submit pull requests. Please ensure that your contributions adhere to the project's coding style and formatting guidelines.

## License

This project is licensed under the MIT License: https://choosealicense.com/licenses/mit/.

## Resources

React: https://react.dev/
Tailwind CSS: https://tailwindcss.com/docs/installation
Preline CSS: https://preline.co/
Flask: https://flask.palletsprojects.com/
Docker: https://docs.docker.com/
AWS: https://aws.amazon.com/
Git: https://git-scm.com/
GitHub Actions: https://docs.github.com/actions
GitLab CI/CD: https://docs.gitlab.com/ee/ci/
Chart.js: https://www.chartjs.org/docs/latest/getting-started/
Highcharts: https://www.highcharts.com/
