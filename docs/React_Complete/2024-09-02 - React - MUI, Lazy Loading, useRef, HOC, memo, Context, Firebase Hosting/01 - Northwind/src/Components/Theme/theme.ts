import { createTheme } from "@mui/material";
import { MuiFormControlLabel } from "./checkbox";

export const theme = createTheme({

    palette: {
        primary: {
            main: "#493A7F"
        }
    },

    typography: {
        allVariants: {
            fontFamily: "monospace",
            textTransform: "none"
        }
    },

    components: {
        MuiFormControlLabel
    }

});