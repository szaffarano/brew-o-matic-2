FROM mhart/alpine-node

COPY ["backend/package.json", "backend/yarn.lock", "/usr/src/app/"] 
COPY ["frontend/package.json", "frontend/yarn.lock", "/tmp/frontend/"] 

RUN cd /tmp/frontend && yarn
RUN cd /usr/src/app && yarn

COPY backend /usr/src/app

COPY frontend /tmp/frontend
RUN \
    cd /tmp/frontend && \
    yarn build && \
    cp -R dist/* /usr/src/app/public && \
    rm -rf /tmp/frontend

EXPOSE 3000

WORKDIR /usr/src/app

CMD [ "yarn", "start" ]