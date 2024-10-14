# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend source code to the container
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
