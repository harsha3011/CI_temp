FROM mhart/alpine-node
RUN mkdir test
WORKDIR test
RUN npm install -g  htmlhint
RUN npm install -g istanbul
RUN apk update && apk add git
RUN npm install --save-dev -g eslint eslint-config-google
COPY . .
CMD ["./sample.sh"]
