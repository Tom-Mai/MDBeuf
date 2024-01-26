import { Typography } from "@mui/material";


interface Titreh1props {
 textContent : React.ReactNode;
}
export const Titreh1 = ({textContent}: Titreh1props) => {
    return (
        <Typography
        sx={{
          fontFamily: 'Oswald',
          textAlign: "center",
          color: "white",
          whiteSpace: "pre-line",
          fontSize:'4rem',
          "@media (max-width:740px)": {
            lineHeight:"10vh",
        },
        }}
        component='div'
        variant='h1'
      >
        {textContent}
      </Typography>

    )
}