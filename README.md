# Veterinaria-Ayacucho
Trabajo practico segundo cuatrimestre 

Autores: Agustina Riela e Ivan Vaquero

developer Backend:
developer Frontend:

url https: https://github.com/Metaltronik/Veterinaria-Ayacucho.git

Paso 1 crear carpeta del proyecto
paso 2 configurar git. 
iniciar git en el repo
configurar git (correo y usuario)
Descargar los archivos de github por primera vez con:
git pull --allow-unrelated-histories origin master
git pull --allow-unrelated-histories origin agustina
git pull --allow-unrelated-histories origin pablo
git pull --allow-unrelated-histories origin ivan


Se creo la rama backend para cambios en el back
Se creo la rama frontend para cambios en el front
se creo la rama develop para mergear backend con frontend
se creo la rama master para la versión final
se creo la rama hotfix para cambios de ultimo momento

Nota: antes de generar un push a git se debe realizar un pull para traer cualquier cambio que puediera haber echo un colaborador. 

**Frontend especificaciones**

Paleta de colores: https://paletton.com/#uid=33i0u0kgZ7Gfpg6g0bMlgavoSc2

**backend especificaciones**


**TAREA QUE DEBEMOS REALIZAR** 

Ejercicio
Hagamos un ejemplo práctico:
Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
●Sucursales de Veterinarias
●Clientes
●Pacientes (mascotas)
●Proveedores
Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta) La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.
●Clientes: nombre, teléfono, si es VIP (cliente recurrente, en el cual se guarda el número de visitas e incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o mas) y un id (generado igual que los anteriores), las veterinarias deben contar con la opción de alta, baja y modificación de los mismos.
Pacientes (mascotas): nombre, especie (si no es perro o gato, deberá registrarse como exótica), id del dueño, las veterinarias deben contar con la opción de alta, baja y modificación de los mismos.
●Proveedores: nombre, teléfono y un id generado como los otros la red debe contar con la opción de alta, baja y modificación de los mismos.
IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. Si ya existe se debe volver a generar.