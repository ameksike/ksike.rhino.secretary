	/*
	 * Ejemplo de utilización de la biblioteca Ksike/Secretary para conexión a base de datos SQL Server
	 * */

	//... paso 1: cargar la biblioteca
	var secretary = false;
	secretary = __dirname +  "/../secretary";
	secretary = require(secretary);
	
	//... paso 2: crear una instancia de la biblioteca
	secretary = new secretary.Main();
	
    //... paso 3: cargar las variables de configuración 
	secretary.configure({
			driver: "sqlsrv",			//... valores admitidos: pgsql|mysql|mysqli|sqlite|sqlsrv
            host: '192.168.11.234',		//... IP del servidor, valor por defecto localhost 
            pass: 'superin',			//... contraseña para establecer la conexión
			user: 'sa',					//... usuario de la base de datos, valor por defecto sa
            name: "hosp2"				//... nombre de la base de datos a la cual debe conectarse
	});
    //... paso 5: comenzar a utilizar el Secretary
	//...       : ejecutar una consulta de selección 
	secretary.execute( 'select * from dbo.con_analisis', function(rows){
		console.log(rows);
		for(var i in rows){
			console.log("Descripcion (" + i + "):"+ rows[i].des + "  \n");
		}
	});
	//...       : ejecutar una consulta de inserción  
	secretary.execute( 'INSERT INTO "dbo.con_analisis" ("des") VALUES ("33");');
	