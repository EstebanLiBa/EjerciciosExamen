function insertarArtigos() {
    db.artigos.insertOne(
        {
          _id: 1,  
          nombre: 'MULTIFUNCION HP DESKJET 2675',
          rubro: 'impresora',
          precio: 3000,
          stock: 20 
        }
      )
      db.artigos.insertOne(
        {
          _id: 2,  
          nombre: 'MULTIFUNCION EPSON EXPRESSION XP241',
          rubro: 'impresora',
          precio: 3700,
          stock: 5 
        }
      )
      db.artigos.insertOne(
        {
          _id: 3,  
          nombre: 'LED 19 PHILIPS',
          rubro: 'monitor',
          precio: 4500,
          stock: 2
        }
      )
      db.artigos.insertOne(
        {
          _id: 4,  
          nombre: 'LED 22 PHILIPS',
          rubro: 'monitor',
          precio: 5700,
          stock: 4
        }
      )
      db.artigos.insertOne(
        {
          _id: 5,  
          nombre: 'LED 27 PHILIPS',
          rubro: 'monitor',
          precio: 12000,
          stock: 1
        }
      )
      
      db.artigos.insertOne(
        {
          _id: 6,  
          nombre: 'LOGITECH M90',
          rubro: 'mouse',
          precio: 300,
          stock: 4
        }
      )
}
insertarArtigos();