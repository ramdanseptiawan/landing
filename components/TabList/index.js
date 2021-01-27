import React from 'react'
import { AppBar, Tab, Tabs, withStyles, } from '@material-ui/core'
import Scrollspy from 'react-scrollspy'
import _ from 'lodash'
import theme from '../Theme'

const TabsCentered = withStyles({
    root: {
        justifyContent: "center"
    },
    scroller: {
        flexGrow: "0"
    }
})(Tabs);

const TabBold = withStyles({
    selected: {
        fontWeight: 'bold',
        color: theme.palette.primary.dark + ' !important'
    }
})(Tab);

const TabList = ({ sections = [] }) => {
    const [section, setSection] = React.useState(0)
    return <>
        <AppBar variant={'elevation'} position={'sticky'} color={'default'}>
            <TabsCentered
                style={{ justifyContent: 'center', flexGrow: "0" }}
                value={section}
                onChange={(event, value) => {
                    event.preventDefault()
                    document.getElementById(sections[value].hash).scrollIntoView()
                }}
                variant={'scrollable'}
                scrollButtons={'on'}
                indicatorColor={'primary'}
            >
                {sections.map((section, index) => <TabBold style={{ textTransform: 'capitalize', fontFamily: '', color: 'black' }} key={index} label={section.label} />)}
            </TabsCentered>
        </AppBar>
        <Scrollspy
            items={sections.map((section) => section.hash)}
            style={{ display: 'none' }}
            offset={-48}
            onUpdate={(item) => setSection(_.findIndex(sections, (x) => x.hash === item.getAttribute('id')))}
        />
    </>
}

export default TabList