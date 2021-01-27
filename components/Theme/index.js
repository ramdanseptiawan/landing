import { createMuiTheme } from '@material-ui/core'

const Theme = createMuiTheme({ "palette": { "common": { "black": "#000", "white": "#fff" }, "background": { "paper": "#fff", "default": "#fafafa" }, "primary": { "light": "#7986cb", "main": "rgba(105, 123, 184, 1)", "dark": "#303f9f", "contrastText": "#fff" }, "secondary": { "light": "rgba(245, 166, 35, 0.73)", "main": "rgba(245, 166, 35, 1)", "dark": "rgba(243, 151, 0, 1)", "contrastText": "#fff" }, "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" }, "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)" } } });

export default Theme