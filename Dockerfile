# Stage 1: Build the Node.js application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if applicable, e.g., for React, Angular)
RUN npm run build

# Stage 2: Set up Nginx to serve the application
FROM nginx:alpine

# Copy the build output to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 3002
EXPOSE 3002

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
