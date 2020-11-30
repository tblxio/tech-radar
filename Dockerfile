## Build image ##
FROM node:14.15-alpine

# Labels
LABEL maintainer="tblx"

# Workdir creation
WORKDIR /app

# Download dependencies
RUN yarn global add browser-sync
