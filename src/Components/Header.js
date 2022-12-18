import { React, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import Face3Icon from '@mui/icons-material/Face3';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [value,setValue] = useState();

    return (
    <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
        <Toolbar>
            <Face3Icon/>
            <Tab className='HeaderTitle' LinkComponent={NavLink} to="/" label='Kiley Carson' onClick={(e)=>setValue(0)}/>
            <Tabs sx={{ml : 'auto'}} className='HeaderTabGroup' textColor='inherit' value={value} onChange={(e,value)=>setValue(value)}>
                <Tab LinkComponent={NavLink} to="/" label="Home"/>
                <Tab LinkComponent={NavLink} to="/about" label='About Me' value={1}/>
                <Tab LinkComponent={NavLink} to="/projects" label='Portfolio' value={2}/>
                <Tab LinkComponent={NavLink} to="/resume" label='Resume' value={3} />
            </Tabs>
        </Toolbar>
    </AppBar>
    )
}
