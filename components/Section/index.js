import { Grid } from "@material-ui/core";

const Section = ({ background, hash, content, paddingTop = 60, paddingBottom = '4.5%', zIndex = 2 }) => {
    const styling = zIndex <= 2 ? {
        section: {
            background: background,
        },
        grid: {
            WebkitBackdropFilter: 'blur(50px)',
            backdropFilter: 'blur(50px)',
            paddingLeft: '4.5%',
            paddingRight: '4.5%',
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
            position: 'relative',
            zIndex: zIndex + 2,
        }
    } : {
            section: {
                background: background,
                position: 'relative',
                zIndex: zIndex
            },
            grid: {
                WebkitBackdropFilter: 'blur(50px)',
                backdropFilter: 'blur(50px)',
                paddingLeft: '4.5%',
                paddingRight: '4.5%',
                paddingBottom: paddingBottom,
                paddingTop: paddingTop,
            }
        }
    return <section
        style={styling.section}
        id={hash}>
        <Grid
            container
            style={styling.grid}
        >
            {content}
        </Grid>
    </section>
}

export default Section;