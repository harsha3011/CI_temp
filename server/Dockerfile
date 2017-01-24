FROM mhart/alpine-node
RUN mkdir /test
WORKDIR /test
RUN apk update && apk add git
RUN npm install --save-dev -g  htmlhint
RUN npm install -save-dev -g istanbul
RUN npm install --save-dev -g eslint eslint-config-google eslint-json
RUN npm install --save-dev -g mocha mochawesome
RUN npm install -g eslint-plugin-react
RUN npm install -g eslint-plugin-angular
RUN npm install -g babel-eslint

COPY . .
CMD ["sh","./dockerExecution.sh"]
