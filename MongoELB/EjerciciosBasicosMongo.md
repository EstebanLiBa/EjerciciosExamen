FUNCIÓNS

1.Insertar 2 documentos na colección libros
db.libros.insertMany([{_id: 5, titulo: "Sueños de acero y Neon", editorial: "Martinez Roca", precio: 6, cantidad: 20}, {_id: 6, titulo: "EL GRAN LIBRO DEL REINO DE LA FANTASIA", autor: "Geronimo Stilton", editorial: "Destino Infantil&Juvenil", precio: 28, cantidad: 16}])

2.Intentar insertar un documento con clave repetida (qué di a consola?, o permite?)
La consola dice lo siguiente: "E11000 duplicate key error collection: funcions.libros index: _id_ dup key: { _id: 5 }" y no permite introducir elementos con clave repetida.

3.Mostrar todos os documentos
db.libros.find()

4.Agrega unha colección chamada "posts" e inserta 1 documento cunha estructura calquera
db.createCollection("post") > db.post.insertOne({_id:1, prueba: "probando"})

5.Cantas bbdd podes visualizar agora mesmo?
admin, config, funcions y local.

6.Elimina a coleción chamada "posts"
db.post.drop()

7.Crea outra bbdd chamada borrar, introdúcelle un dato calquera
use borrar > db.paraborrar.insertOne({id: 1, borrar: "Seré borrado"})

8.Borra a base de datos creada no punto anterior.

Estando en la bbdd llamada "borrar": db.dropDatabase()

COMPARACIONES

1.Imprime todos os datos da bbdd creada
show collections

2.Imprimir todos os artigos que pertencen ou rubro de 'mouse'.
db.artigos.find({rubro: "mouse"})

3.Imprimir todos os artigos cun precio maior o igual a 5000.
db.artigos.find({precio:{$gte:5000}})

4.Imprimir todas as impresoras que teñen un precio maior ou igual a 3500.
db.artigos.find({rubro:"impresora", precio: {$gte: 3500}})

5.Imprimir todos os artigos cuxo stock atópase comprendido entre 0 y 4.
db.artigos.find({stock:{$in:[0,1,2,3,4]}})

6.Imprimir todos os documentos da colección 'artigos' que non son impresoras.
db.artigos.find({rubro:{$ne: "impresora"}})

BORRAR
1.Borra os documentos da colección 'artigos' onde 'rubro' son 'impresoras'
db.artigos.deleteMany({rubro:{$eq:"impresora"}})

2.Borra todos os artigos que teñen un '_id' maior ou igual a 5.
db.artigos.deleteMany({_id:{$gte: 5}})

MODIFICACIÓN

1.Borra a base de datos creada de artigos.
Estando en la bbdd llamada "comparaciones": db.dropDatabase()

2.Volver crear a base de datos de artigos de novo.
En vscode con mongosh: use comparaciones > load("comparacions.js")// comparacions.js tiene los datos que aparecen en el ejercicio

3.Modifica o prezo do mouse 'LOGITECH M90'
db.artigos.updateOne({nombre: "LOGITECH M90"}, {$set: {precio: 230}})

4.Fixa o stock en 0 do artigo onde o '_id' é 6.
db.artigos.updateOne({_id:6}, {$set: {stock: 0}})

5.Fixa o stock de todos os artigos a 0.
db.artigos.updateMany({},{$set:{stock: 0}})

6.Modifica o artigo con '_id' = 6, o cal deberá introducir unha nova propiedade: 'encargados', onde o valor introducido será o seguinte array: ['Juan','Francisco']
db.artigos.updateOne({_id: 6}, {$set: {encargados: ['Juan','Francisco']}})

ATOPAR

1.Mostra todos os documentos onde só se visualicen o _id e o laboratorio
db.medicamentos.find({},{nome: 0, precio: 0, cantidade: 0})

2.Mostra os medicamentos onde laboratorio sexa 'Roche' e onde o precio sexa menor a 5.
db.medicamentos.find({$and:[{laboratorio:{$eq:"Roche"}}, {precio:{$lt:5}}]})

3.Mostra os medicamentos onde laboratorio sexa 'Roche' ou onde o precio sexa maior a 5.
db.medicamentos.find({$or:[{laboratorio:{$eq:"Roche"}}, {precio:{$gt:5}}]})

4.Mostra os medicamentos onde laboratorio non sexa 'Bayer'.
db.medicamentos.find({laboratorio:{$ne:"Bayer"}})

5.Mostra os medicamentos onde laboratorio sexa 'Bayer' e onde cantidade non sexa 100.
db.medicamentos.find({$and:[{laboratorio:{$eq:"Bayer"}}, {cantidade:{$ne: 100}}]})

6.Mostra os laboratorios que sexan 'Bayer' e o precio menor que 6, pero só debes mostrar o nome e o laboratorio
db.medicamentos.find({$and:[{laboratorio:{$eq:"Bayer"}}, {precio:{$lt: 6}}]}, {_id: 0, nome: 0, precio: 0, cantidade: 0})

ELIMINAR

1.Borra os documentos da colección onde laboratorio sexa "Bayer" ou onde precio sexa menor a 3.
db.medicamentos.deleteMany({$or:[{laboratorio:{$eq:"Bayer"}}, {precio:{$lt:3}}]})

MODIFICAR

Cambia a cantidade 200 a todos os medicamentos de 'Roche' onde o precio sexa maior a 5.
db.medicamentos.updateMany({$and:[{laboratorio:{$eq:"Roche"}}, {precio:{$gt: 5}}]}, {$set:{cantidade: 200}})