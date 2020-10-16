# Laboratorio Software Avanzado
## Practica No. 6

### Luis Fernando Lizama - 201602656

El video de demostracion de este proyecto puede encontrarse en  [este enlace](https://youtu.be/McZ7ILGPgQw "Video")

# Correr pruebas unitarias
```javascript
mocha
```
# Ejecutar SonarQube
```javascript
sonar-scanner
```

# Creación de Artefactos
Las configuraciones se encuentran dentro del archivo gulpfile.js para crear los artefactos de cada una de las aplicaciones ejecutamos el siguiente comando
```javascript
gulp
```
Este comando creará la carpeta "dist" que contendrá 4 archivos comprimidos, los cuales son:
- Client
- Restaurant
- EBS
- Driver

# Cliente y EBS
El cliente y el EBS fueron desarrollados con python utilizando la libreria requests para realizar las peticiones y Flask para levantar el servidor

Para instalar requests y Flask utilizamos el comando 
```python
pip install requests
pip install Flask
```
Para ejecutar el archivo utilizamos el comando
```python
python main.py
python app.py
```
# Restaurante y Repartidor
El api para el restaurante fue desarrollado utilizando NodeJS y express
Para instalar los módulos necesarios corremos el siguiente comando
```javascript
npm install
```
Para ejecutar el archivo utilizamos el siguiente comando dentro de la carpeta que contiene el archivo. El restaurante se ejecuta en el puerto 3000 y el repartidor en el puerto 3200
```javascript
npm start
```
