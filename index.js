// Import the express module
const express = require('express');

// Set the port number to 4000
const PORT = 4000;

// Create a new express app
const app = express();

// Import the engine function from express-handlebars
const { engine } = require('express-handlebars');

// Set the view engine to use handlebars
app.set('view engine', 'hbs');

// Configure handlebars engine with some settings
app.engine('hbs', engine({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'mirror_index',
  partialsDir: __dirname + '/views/partials',
}));

// Serve static files from the public folder
app.use(express.static('public'));

//simulated api 
simulatedAPI = () => {
    return [
        {
            name:'Top Gun', 
            colors:'even'
        }, 
        {
            name:'Tog Gun II', 
            colors:'odd'
        }, 
        {
            name:'Thor I', 
            colors:'even'
        }, 
        {
            name:'Loki', 
            colors:'odd'
        }, 
    ]
}

// Define the homepage route
app.get('/', (req, res) => {
  // Render the main.hbs file using the index.hbs layout
  res.render('main', { layout: 'index', suggestedMovies:simulatedAPI() });
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
