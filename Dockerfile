# Use official Node.js image as base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 (default port for Next.js)
EXPOSE 3000

# Command to start the Next.js app
CMD ["npm", "start"]
