import React from 'react'
import { AppBar, Tab, Tabs, } from '@material-ui/core'
import { tabStyles } from '../Theme'
import Scrollspy from 'react-scrollspy'
import _ from 'lodash'

const TabList = ({ sections = [] }) => {
    const tabStyle = tabStyles()
    const [section, setSection] = React.useState(0)
    return <>
        <AppBar variant={'elevation'} position={'sticky'}>
            <Tabs
                value={section}
                classes={{ root: tabStyle.root, scroller: tabStyle.scroller }}
                onChange={(event, value) => {
                    event.preventDefault()
                    document.getElementById(sections[value].hash).scrollIntoView()
                    console.log(value)
                }}
                variant={'scrollable'}
                scrollButtons={'on'}
            >
                {sections.map((section, index) => <Tab style={{ textTransform: 'capitalize', fontFamily: '' }} key={index} label={section.label} />)}
            </Tabs>
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