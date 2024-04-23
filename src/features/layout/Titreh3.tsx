import * as React from 'react';
import Typography from '@mui/material/Typography';
// Definir une iterface pour props 
interface Titreh3Props {
    headingText: React.ReactNode;
    h3Black?: React.ReactNode;
    H3PosLeft?: React.ReactNode;
}

export const Titreh3 = ({ headingText, h3Black, H3PosLeft }: Titreh3Props) => {

    return (

        <Typography variant='h3' component="h3"
            sx={{
                fontFamily: 'Oswald',
                fontWeight: "300",
                color: h3Black ? "#323334" : "#b89b3e",
                paddingY: "10px",
                textAlign: H3PosLeft ? "left" : "center",
                lineHeight: "1.1",
                fontSize: "3.5rem",
                wordWrap: "break-word",
                cursor: "auto",
            }}>
            {headingText}
        </Typography>

    )
}