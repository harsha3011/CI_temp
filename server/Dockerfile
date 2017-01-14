FROM mhart/alpine-node
RUN mkdir test
WORKDIR test
RUN npm install -g  htmlhint
RUN npm install -g istanbul 
RUN apk update && apk add git
COPY . .
CMD ["./sample.sh"]
