const express = require('express'); 
const PORT = 4000; 
const app = express(); 
const {engine} = require('express-handlebars'); 

app.set('view engine', 'handlebars'); 

app.engine('handlebars', engine({
   layoutsDir: __dirname + '/views/layouts', 
}))

app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('main', {layout:'index'}); 
}); 

app.listen(PORT, () => console.log(`Server running at ${PORT}`)); 
