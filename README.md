# Laboratorio Software Avanzado - Práctica 10

## Luis Fernando Lizama - 201602656

El video de demostracion de este proyecto puede encontrarse en  [este enlace](https://youtu.be/bZsNHZugCm4 "Video")

Los Archivos de docker file y docker compose se encuentran en su carpeta correspondiente dentro de /src

## Configuración general
El Script para eliminar las imagenes anteriores y crear las nuevas se encuentra en el archivo src/main.sh. Para ejecutarlo unicamente escribimos el comando
```bash
./main.sh
```

Para levantar toda la arquitectura con docker compose ejecutamos el comando 
```cmd
sudo docker-compose up
```

Y para detenerlo ejecutamos 
```cmd
sudo docker-compose down
```

```
 ## API REST
 Todas las API'S desarrolladas funcionan sobre NODEJS por lo que el docker file es el mismo para todas y se muestra a continuacion

Dockerfile:
```Dockerfile
FROM node
WORKDIR /App
ADD . /App
RUN npm install
ENV PORT 3000
ENV IP "192.168.0.0"
CMD ["node","index.js"]
```


 ## Docker Compose
El archivoo de docker compose se compone de 3 servicios y una red interna que permite la comunicación entre todos los servicios. Cada uno de los servicios posee una IP interna estática y los parámetros de conexión tambien se pasan por medio del docker compose. 
Dockerfile:
```yml
version: "3"
services:
  driver:
    image: driver
    ports:
      - "3200:3200"
    networks:
      testing_net:
            ipv4_address: 182.18.7.9    
    environment:
      - PORT=3200      
  
  restaurant:
    image: restaurant
    ports:
      - "3000:3000"
    networks:
      testing_net:
            ipv4_address: 182.18.7.8    
    environment:
      - PORT=3000      

  ebs:
    image: ebs
    ports:
      - "5000:5000"
    networks:
      testing_net:
            ipv4_address: 182.18.7.10    
    environment:
      - PORT=5000  
  
  client:
    image: client    
    networks:
      testing_net:
            ipv4_address: 182.18.7.11
    environment:
      - EBSIP=182.18.7.10
    depends_on:
      - ebs
    
      
    
networks:
    testing_net:
        ipam:
            driver: default
            config:
                - subnet: 182.18.7.0/24
```
