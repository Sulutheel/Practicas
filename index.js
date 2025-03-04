import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


function logger(req, res, next) {
    //  <html><head></head><body> <a href='/'>Ir a la Casa</a></body></html>
    console.log(`LOGGER:${req.url}`);
    next();
}


app.use(logger);

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'Actividad.html')); 

});

app.get('/win',(req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'win.html')); 
    //res.sendFile('index.html');
});
app.get('/lose',(req, res) =>{
    console.log("LOSE");
    res.sendFile(path.join(__dirname, 'views', 'lose.html')); 

}); 

app.use((req, res) => {
    res.status(400).send('Error esta Pagina no Existe');
});


//app.get('/segundapagina',(req, res) =>{
    //res.send(`
      //  <html><head></head><body> <a href='/'>Ir a la Calle</a></body></html>
        //`);
//});

app.listen(3000, () => {
    console.log('Server runing on http://localhost:3000');
});