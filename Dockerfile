FROM openjdk:8
ADD target/projeterp-1.0.jar projeterp-1.0.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "projeterp-1.0.jar"]