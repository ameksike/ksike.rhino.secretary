	/*
	 * Ejemplo de utilizaci�n de la biblioteca Ksike/Secretary para conexi�n a base de datos SQLite
	 * */

	//... paso 1: cargar la biblioteca
	var secretary = false;
	secretary = __dirname +  "/../secretary";
	secretary = require(secretary);
	
	//... paso 2: crear una instancia de la biblioteca
	secretary = new secretary.Main();
	
    //... paso 3: cargar las variables de configuraci�n 
	secretary.configure({
		driver: "sqlite",   		//... valores admitidos: pgsql|mysql|mysqli|sqlite|sqlsrv
		name: 'ploy', 				//... ruta donde se encuentra la base de datos
		path: __dirname + '/data/',	//... ruta donde se encuentra la base de datos
		extension: "db"				//... default value db
	});
    //... paso 5: comenzar a utilizar el Secretary
	//...       : ejecutar una consulta de selecci�n 
	secretary.execute( 'SELECT * FROM user', function(rows){
		console.log(rows);
		for(var i in rows){
			console.log("Descripcion (" + i + "):"+ rows[i].des + "  \n");
		}
	});
	//...       : ejecutar una consulta de inserci�n  
	secretary.execute( 'INSERT INTO "user" ("name", "age", id) VALUES ("Janny", "33", "99");');