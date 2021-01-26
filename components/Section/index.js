import { Grid } from "@material-ui/core"

const Section = ({ background, hash, content, paddingTop = 60, paddingBottom = '4.5%' }) => {
    return <section
        style={{
            backgroundImage: background,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            WebkitBackgroundSize: 'cover',
        }}
        id={hash}>
        <Grid
            container
            style={{
                WebkitBackdropFilter: 'blur(50px)',
                backdropFilter: 'blur(50px)',
                paddingLeft: '4.5%',
                paddingRight: '4.5%',
                paddingBottom: paddingBottom,
                paddingTop: paddingTop
            }}
        >
            {content}
        </Grid>
    </section>
}

export default Section