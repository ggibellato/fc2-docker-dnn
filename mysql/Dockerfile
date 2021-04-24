FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=root

COPY schema.sql /docker-entrypoint-initdb.d
     
CMD [ "--innodb-use-native-aio=0" ]
