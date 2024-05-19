import * as React from 'react';
import Typography from '@mui/material/Typography';
// Definir une iterface pour props 
interface Titreh2Props {
    headingText: React.ReactNode;
    h2Black?: React.ReactNode;
}

export const Titreh2 = ({headingText,h2Black}: Titreh2Props) => {

    return(

        <Typography variant='h2' component="h2"
        sx={{
            fontFamily: 'Oswald',
            fontWeight:"300",
            color: h2Black ? "#323334" : "#b08d57",
            textAlign: "center",
            lineHeight:"1.1",
            fontSize:"4.5rem",
            wordWrap: "break-word",
            cursor:"auto",
        }}>
            {headingText} 
        </Typography>

    )
}
