import { Grid, Typography } from "@material-ui/core"

const Jembatanku = ({ }) => {
    return <>
        <Grid container style={{ height: '100vh' }} alignContent={'center'} alignItems={'center'} justify={'center'}>
            <Grid item>
                <Typography variant={'h2'} align={'center'}>
                    Page of JembatanKu
                </Typography>
            </Grid>
        </Grid>
    </>
}

export default Jembatanku