import { Typography } from "@mui/material";


interface Titreh1props {
 textContent : React.ReactNode;
}
export const Titreh1 = ({textContent}: Titreh1props) => {
    return (
        <Typography
        sx={{
         
          textAlign: "center",
          color: "white",
          whiteSpace: "pre-line",
          "@media (min-width:680px)": {},
        }}
        component='div'
        variant='h1'
      >
        {textContent}
      </Typography>

    )
}