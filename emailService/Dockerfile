FROM paas-regi.cocktailcloud.io/docker.io/tomcat:latest
COPY target/email-service-1.0-SNAPSHOT.jar demo.jar
ENTRYPOINT ["java","-jar","demo.jar"]
