FROM ubuntu:22.04

RUN apt-get update && \
        apt-get upgrade -y && \
        apt-get install -y \
        curl \
        gnupg \
        ca-certificates \
        git

# Install node
RUN mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update -y && \
    apt-get install -y nodejs

# Install npm packages
RUN npm install -g @angular/cli

WORKDIR /app
