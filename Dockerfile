# Use the official Node.js image.
FROM node:22-slim

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies.
RUN npm install

# Copy the rest of your app's source code.
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD [ "npm", "start" ]
