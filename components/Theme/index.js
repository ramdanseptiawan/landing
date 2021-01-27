import { createMuiTheme } from '@material-ui/core'

const Theme = createMuiTheme({
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "#fff",
            "default": "#fafafa"
        },
        "primary": {
            "light": "rgba(239, 229, 253, 1)",
            "main": "rgba(239, 229, 253, 1)",
            "dark": "rgba(216, 216, 216, 1)",
            "contrastText": "rgba(0, 0, 0, 1)"
        },
        "secondary": {
            "light": "rgba(105, 123, 184, 1)",
            "main": "rgba(105, 123, 184, 1)",
            "dark": "rgba(76, 89, 131, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
});

export default Theme