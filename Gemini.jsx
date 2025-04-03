import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';

import { useTheme } from "@emotion/react";


const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });


function Gemini() {
    const [message, setMessage] = useState("");
    const [respuestas, setRespuestas] = useState([])
    const [isLoading, setLoading] = useState(false)
    const theme =useTheme();
    const handleMessage = async () => {
        console.log("Enviar Mensaje");
        let usuarioMessage = {message: message, role: "usuario"}
        setRespuestas(prevRespuestas => [...prevRespuestas, usuarioMessage]);
        setLoading(true)

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: message,
          });
          let geminiMessage = {message: response.text, role: "gemini"}
            setRespuestas(prevRespuestas => [...prevRespuestas, geminiMessage]);
            setLoading(false)
          console.log(response.text);
    }
    
    return(
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }} id="footer">
            <Typography variant="h1" sx={{backgroundColor: theme.palette.primary.main}}>Gemini&apos;s Chat</Typography>
            
            
            
            <Button variant="outlined" color="secondary" size="small">Hello World</Button>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            {respuestas.map((data, index)=>
                data.role ==='usuario' ?
                <li key={index} style = {data.role=== "gemini" ?{color:"skyblue"}:{color:"black"}} className="usuarioMessage">{data.message}</li>
                :
                <li key={index} style = {data.role=== "gemini" ?{color:"skyblue"}:{color:"black"}} className="geminiMessage">{data.message}</li>
                /*<li key={index}
                style = {data.role=== "gemini" ?{color:"blue"}:{color:"green"}}>
                    {data.message}</li>*/
            )}
            </Box>
                {isLoading && (<CircularProgress/>)}
                <TextField  type="text" id="message" name="message" onChange={(e)=> setMessage(e.target.value)}/>
                <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />}onClick={handleMessage}>
                Enviar
                </Button>
                </Stack>

                     
                     <br/>
                &copy; 2025 IA Gemini - Todos los derechos reservados | Términos y Condiciones | Política de Privacidad
            
        </Box>
        
    )
    
}







export default Gemini;