import { Theme } from "@emotion/react";
import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from "@mui/material";

export type MuiFormControlLabelType = {
    defaultProps?: ComponentsProps["MuiFormControlLabel"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiFormControlLabel"];
    variants?: ComponentsVariants<Theme>["MuiFormControlLabel"];
};

export const MuiFormControlLabel: MuiFormControlLabelType = {
    styleOverrides: {
        label: {
            fontSize: 18,
        }
    }
};