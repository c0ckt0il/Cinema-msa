FROM paas-regi.cocktailcloud.io/docker.io/tomcat:latest
COPY target/email-service-1.0-SNAPSHOT.jar email-service-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","email-service-1.0-SNAPSHOT.jar"]
