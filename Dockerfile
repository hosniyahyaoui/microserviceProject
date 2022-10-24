FROM openjdk:8
ADD target/projeterp2-1.0.jar projeterp2-1.0.jar
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "projeterp2-1.0.jar"]