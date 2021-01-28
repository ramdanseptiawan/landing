import { Grid, Typography } from "@material-ui/core"
import Head from 'next/head'

const Jembatanku = ({ }) => {
    return <>
        <Head>
            <title>PT. Langgeng Cipta Solusi - JembatanKu</title>
            <meta name="description" content="JembatanKu is an Indonesia domestic product in the form of an integrated system which is built and developed to provide an early alerting and health monitoring system for bridges in real time." />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="PT. Langgeng Cipta Solusi - JembatanKu" />
			<meta property="og:description" content="JembatanKu is an Indonesia domestic product in the form of an integrated system which is built and developed to provide an early alerting and health monitoring system for bridges in real time." />
			<meta property="og:url" content="https://lcsindonesia.com/jembatanku.com" />
			<meta property="og:site name" content="PT. Langgeng Cipta Solusi - JembatanKu" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:description" content="JembatanKu is an Indonesia domestic product in the form of an integrated system which is built and developed to provide an early alerting and health monitoring system for bridges in real time." />
			<meta name="twitter:title" content="PT. Langgeng Cipta Solusi - JembatanKu" />
			<meta name="twitter:image" content="/logo512.png" />
			<link rel="canonical" href="https://lcsindonesia.com/jembatanku" />
        </Head>
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