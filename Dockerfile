FROM node:7

# npm install
ADD package.json /tmp/package.json

RUN cd /tmp && npm install
RUN mkdir -p /opt/app-root && cp -a /tmp/node_modules /opt/app-root/

# Set work directory
WORKDIR /opt/app-root/

# Copy source to work directory
COPY . .

# Set port
ENV PORT 8080

# Expose the port
EXPOSE  8080

# Builds and start the app
CMD ["npm", "run", "start"]
