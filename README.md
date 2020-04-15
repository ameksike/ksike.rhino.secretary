# Secretary Rhino
Lightweight library for data access abstraction, Ksike Framework Rhino distro is oriented to the JavaScript programming language on Node.Js version 6.9.1 or higher.

## Libs 
As a technology policy proposed by the Ksike Framework, there are other implementations of this library for other platforms, which are listed below:
+ [Secretary: Ksike Framework Elephant focus on PHP](https://github.com/ameksike/ksike.elephant.secretary) 


### How to configure
```javascript
	//... how to load and configure the library in the Ksike Rhino framework
	this.query = assist.get("ksike/secretary").configure({
		driver: "sqlite",
		name: 'data/ploy.db'
	});
```

### How to run a simplified data selection and process the result 
```javascript
	var onData = (rows) => console.log(rows);
	this.query.execute( "SELECT des FROM Test2", this.onData, this );
```

### How to do insert or create 
```javascript

	//... how to execute a data insert
	this.query.execute([ "INSERT INTO Test2 VALUES (?,?)", [5, "TEST"]]);
	//... how to create a table in the database
	this.query.execute( "CREATE TABLE Test2 (id INT, des TEXT)");
```

### How to used in ksike framework 
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
```

## How to create a new custom driver
This library involves a component-based architecture, allowing developers to extend their behavior. In case you require a controller for any non-existent database manager, its implementation is very simple. You must create a folder with the name of the driver in lowercase inside the directory lib, inside it defines a directory called src and inside it create a file Main.js which will contain the implementation.

### or this example the driver named mydriver will be created: ./lib/mydriver/src/Main.js, with a structure similar to the one shown below:
```javascript
	class MyDriver
	{
		constructor(opt=false){ }

		configure(opt=false){ }

		connect(callback=false, score=false){ }

		disconnect(){ }

		query(sql=false, callback=false, score=false) {}

		onError(error){}

		dsn(){ }
	}

	exports.Main = MyDriver;
```

### How to configure
```javascript
	//... how to load my custom driver
	this.query = assist.get("ksike/secretary").configure({
		driver: "mydriver",
		name: 'data/ploy.db'
	});
```