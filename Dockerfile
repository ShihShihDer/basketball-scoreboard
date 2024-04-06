# Stage 1: Build the Angular app in a node.js environment
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json /app/

# Install npm dependencies
RUN npm install

# Copy the project files into the docker image
COPY . /app

# Build the application
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Copy the built app to nginx server
COPY --from=build /app/dist/basketball-scoreboard/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
