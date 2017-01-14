FROM mhart/alpine-node
RUN mkdir test
WORKDIR test
RUN apk update && apk add git
RUN npm install htmlhint -g
COPY . .
CMD ["./sample.sh"]
