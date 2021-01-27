import React from 'react'
import { AppBar, Tab, Tabs, withStyles, } from '@material-ui/core'
import Scrollspy from 'react-scrollspy'
import _ from 'lodash'

const TabsCentered = withStyles({
    root: {
        justifyContent: "center"
    },
    scroller: {
        flexGrow: "0"
    }
})(Tabs);

const TabList = ({ sections = [] }) => {
    const [section, setSection] = React.useState(0)
    return <>
        <AppBar variant={'elevation'} position={'sticky'}>
            <TabsCentered
                style={{ justifyContent: 'center', flexGrow: "0" }}
                value={section}
                onChange={(event, value) => {
                    event.preventDefault()
                    document.getElementById(sections[value].hash).scrollIntoView()
                    console.log(value)
                }}
                variant={'scrollable'}
                scrollButtons={'on'}
            >
                {sections.map((section, index) => <Tab style={{ textTransform: 'capitalize', fontFamily: '' }} key={index} label={section.label} />)}
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