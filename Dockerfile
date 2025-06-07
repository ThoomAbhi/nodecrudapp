# Use the official Node.js LTS image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Clone the repository
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/ThoomAbhi/nodecrudapp.git .

# Install dependencies
RUN npm install

# Expose the app port (change if your app uses another port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
