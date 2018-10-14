var fs = require('fs')

var dirName = process.argv[2]

if(fs.existSync(dirName)){
	process.exit()
} else {
	fs.madirSync("./" + dirName)
	process.chdir("./" + dirName)

	fs.madirSync('css')
	fs.mkdirSync('js')

	fs.writeFileSync("./index.html",
		'<!DOCTYPE>
		<title>Hello</title>
		<hi>Hi</hi>');
        fs.writeFileSync("css/style.css",'h1{color: red;}')
	fs.writeFileSync("js/main.js",
		'var string = "Hello World"
		alert(string)');
		process.exit();
}

