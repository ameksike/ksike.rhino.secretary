# Secretary Rhino
Lightweight library for data access abstraction, your Rhino distro is oriented to the JavaScript programming language on Node.Js version 6.9.1 or higher.

## Libs 
As a technology policy proposed by the Ksike Framework, there are other implementations of this library for other platforms, which are listed below:
+ [Secretary: Ksike Framework Elephant focus on PHP](https://github.com/ameksike/ksike.elephant.secretary) 


## Examples:

```javascript
	//... establishing a connection to a SQLite database
	this.query = require("secretary").configure({
		driver: "sqlite",
		name: 'data/ploy.db'
	});
	//... how to run a selection of data on the selected database
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
	//... how to run a simplified data selection and process the result
    this.query.execute( "SELECT des FROM Test2", this.onData, this );
	/*
		onData : function(rows){
			console.log(rows);
		},
	*/
	//... how to execute a data insert
	this.query.execute([ "INSERT INTO Test2 VALUES (?,?)", [5, "TEST"]]);
	//... how to create a table in the database
	this.query.execute( "CREATE TABLE Test2 (id INT, des TEXT)");
	//... how to load and configure the library in the Ksike Rhino framework
	this.query = assist.get("ksike/secretary").configure({
		driver: "sqlite",
		name: 'data/ploy.db'
	});
```