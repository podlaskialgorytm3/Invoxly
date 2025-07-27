# Etap 1: Budowanie aplikacji za pomocą Mavena
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Etap 2: Tworzenie finalnego, lekkiego obrazu
FROM openjdk:17-jdk-slim
WORKDIR /app
# Kopiuj plik .jar z etapu budowania
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
# Uruchom aplikację
ENTRYPOINT ["java", "-jar", "app.jar"]
