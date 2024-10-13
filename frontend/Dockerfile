# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code to the container
COPY . .

# Expose port 80
EXPOSE 3000

# Start nginx
CMD ["npm" , "start"]
