import { createServer, get } from 'node:http';
import fs from 'node:fs';
import url from'node:url';

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer((req, res)=>{
  if (req.method == 'GET') { 
        fs.readFile('Nuevo.html', (err, data) =>{
            console.log(data);
            if (err) {
                res.end("Error al leer")
            } else {
                const nombre = 'Pablo';
                let pageCode = data.toString();
                pageCode= pageCode.replace('{{nombre}}', nombre);
                res.write(pageCode);
                res.end;
            }
            
        });  
}});
server.listen(port, () => {
    console.log('Server running on http://127.0.0.1:3000/');
});
    
