FROM node:14.17-bullseye-slim

RUN apt-get update && apt-get install -y curl unzip \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && apt-get remove -y curl unzip && apt-get autoremove -y && apt-get clean -y \
    && rm -rf awscliv2.zip