FROM daocloud.io/library/java

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN echo 'data'
RUN ls

ENV MAVEN_VERSION 3.3.3

RUN curl -fsSL http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz | tar xzf - -C /usr/share \
  && mv /usr/share/apache-maven-$MAVEN_VERSION /usr/share/maven \
  && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

ENV MAVEN_HOME /usr/share/maven

RUN echo 'Get Maven Home:'
RUN echo $MAVEN_HOME

RUN mvn clean
RUN mvn package -Denv=pub

EXPOSE 8080
#
CMD java -jar target/react-boot-0.0.1-SNAPSHOT.jar