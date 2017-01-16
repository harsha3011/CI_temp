FROM mhart/alpine-node
RUN mkdir test
WORKDIR test
RUN apk update && apk add git
RUN npm install --save-dev -g  htmlhint
RUN npm install -save-dev -g istanbul
RUN npm install --save-dev -g eslint eslint-config-google eslint-json
RUN npm install --save-dev -g mocha mochawesome-report-generator
COPY . .
CMD ["./sample.sh"]
