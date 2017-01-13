FROM mhart/alpine-node
RUN mkdir test
WORKDIR test
RUN apk update && apk add git
COPY . .
CMD ["./sample.sh"]
