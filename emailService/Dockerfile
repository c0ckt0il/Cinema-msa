#FROM paas-regi.cocktailcloud.io/docker.io/tomcat:latest
FROM ccpr.cocktailcloud.io/docker.io/library/eclipse-temurin:17.0.11_9-jdk-alpine
COPY target/email-service-1.0-SNAPSHOT.jar email-service-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","email-service-1.0-SNAPSHOT.jar"]
