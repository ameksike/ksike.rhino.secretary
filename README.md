# secretary-rhino
Librería ligera para abstracción de acceso a dato, su distro Rhino está orientada al lenguaje de programación JavaScript sobre NodeJs version 6.9.1 o superior.

ejemplos:

<pre>
	//... estableciendo una conexión a una base de datos SQLite
	this.query = require("secretary").configure({
		driver: "sqlite",
		data: 'data/ploy.db'
	});
	//... como ejecutar una selección de datos sobre la base de datos seleccionada
	this.query.execute(
		"SELECT id, dt as des FROM user",
		function(rows){
			console.log(rows);
			for(var i in rows){
				assist.get("ksike/response").show("Descripcion (" + i + "):"+ rows[i].des + "  <br> ");
			}
			assist.get("ksike/response").end();
		},
		this
	);
	//... como ejecutar una selección de datos simplificada y tratar el resultado
    this.query.execute( "SELECT des FROM Test2", this.onData, this );
	/*
		onData : function(rows){
			console.log(rows);
		},
	*/
	//... como ejecutar una inserción de datos
	this.query.execute([ "INSERT INTO Test2 VALUES (?,?)", [5, "TEST"]]);
	//... como crear una tabla en la base de datos
	this.query.execute( "CREATE TABLE Test2 (id INT, des TEXT)");
	//... como cargar y configurar la biblioteca en el framework Ksike Rhino
	this.query = assist.get("ksike/secretary").configure({
		driver: "sqlite",
		data: 'data/ploy.db'
	});
</pre>