# Use the official Node.js image as base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the frontend application code into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port on which the React application will run
EXPOSE 3000

# Command to start the React application
CMD ["npm", "start"]