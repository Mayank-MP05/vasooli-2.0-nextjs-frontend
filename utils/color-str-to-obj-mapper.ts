import {
    amber,
    blue,
    blueGrey,
    brown,
    common,
    cyan,
    deepOrange,
    deepPurple,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow
} from "@mui/material/colors";

const colorsObjectOfObject: any = {
    amber,
    blue,
    blueGrey,
    brown,
    common,
    cyan,
    deepOrange,
    deepPurple,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow,
}

/**
 * Maps a color string to its corresponding color object from the Material UI color library.
 * If the color string is not found, it returns the "common" color object.
 * @param {string} colorStr - The color string to map to a color object.
 * @returns {object} - The color object corresponding to the given color string.
 */
export const colorStrToObjMapper: any = (colorStr: string) => {
    if (colorsObjectOfObject[colorStr]) {
        return colorsObjectOfObject[colorStr];
    } else {
        return colorsObjectOfObject["common"];
    }
}

/**
 * Returns an array of all the color strings available in the Material UI color library.
 * @returns {Array<string>} - An array of all the color strings available in the Material UI color library.
 */
export const getColorsStrArray: any = () => {
    return Object.keys(colorsObjectOfObject).map(colorName => toTitleCase(colorName));
}

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert to title case.
 * @returns {string} - The title case version of the input string.
 */
const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

