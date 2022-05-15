let express = require('express');
const res = require('express/lib/response');
const path = require('path'); 


let app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => console.log("esto fue exitoso"));


app.get('/home', function(req, res){
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath)
})