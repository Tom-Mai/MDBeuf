import * as React from 'react';
import Typography from '@mui/material/Typography';
// Definir une iterface pour props 
interface Titreh2Props {
    textContent: React.ReactNode;
    h2Black?: React.ReactNode;
}

export const Titreh2 = ({textContent,h2Black}: Titreh2Props) => {

    return(

        <Typography variant='h2' component="h2"
        sx={{
            fontFamily: 'Oswald',
            fontWeight:"700",
            color: h2Black ? "#323334" : "#b89b3e",
            textAlign: "center",
            lineHeight:"1.1",
            fontSize:"3rem",
            wordWrap: "break-word",
            cursor:"auto",
        }}>
            {textContent} 
        </Typography>

    )
}
