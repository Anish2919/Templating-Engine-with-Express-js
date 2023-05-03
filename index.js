const express = require('express'); 
const PORT = 4000; 
const app = express(); 
const {engine} = require('express-handlebars'); 

app.set('view engine', 'hbs'); 

app.engine('hbs', engine({
   layoutsDir: __dirname + '/views/layouts', 
   extname: 'hbs', 
   defaultLayout: 'mirror_index'
   
}))

app.use(express.static('public')); 

app.get('/', (req, res) => {
    // res.render('main', {layout:'index'}); 
    res.render('main'); 
}); 

app.listen(PORT, () => console.log(`Server running at ${PORT}`)); 
