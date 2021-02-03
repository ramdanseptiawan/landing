import { Grid, Link, Typography } from "@material-ui/core";

const Technology = ({ logo, name, link }) => {
    return <Grid
        container
        justify={'center'}
        alignContent={'center'}
        alignItems={'center'}
        style={{
            height: 150,
            padding: '5%',
            background: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.37)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            borderRadius: '10px',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}
    >
        <Grid item>
            {logo}
        </Grid>
        <Grid item xs={12}>
            <Typography align={'center'}>
                <Link href={link} target={'_blank'} rel={'noopener'} color={'textPrimary'}>
                    {name}
                </Link>
            </Typography>
        </Grid>
    </Grid>
}

export default Technology;