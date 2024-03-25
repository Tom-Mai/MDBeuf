import * as React from 'react';
import Typography from '@mui/material/Typography';
// Definir une iterface pour props 
interface Titreh3Props {
    textContent: React.ReactNode;
}

export const Titreh3 = ({textContent}: Titreh3Props) => {

    return(

        <Typography variant='h3' component="h3"
        sx={{
            fontFamily: 'Oswald',
            fontWeight:"700",
            color: "#b89b3e",
            // color: "#323334",
            // textAlign: "left", 
            lineHeight:"1.1",
            fontSize:"3rem",
            wordWrap: "break-word",
            cursor:"auto",
        }}>
            {textContent} 
        </Typography>

    )
}