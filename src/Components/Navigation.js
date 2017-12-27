import React, { Component } from 'react';
import { Menu,MenuItem,Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Navigation extends Component{
    state = { activeItem: 'Home' }
    handleItemClick = (e, { HighlighterName }) => this.setState({ activeItem: HighlighterName })
    
    render(){
        const { activeItem } = this.state
        return(
            <Menu style={{"background-color":'white !important'}} className='MenuBar' pointing secondary>
                <Link to='/home'>
                    <MenuItem name='Home' HighlighterName='Home' icon='home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                </Link>
                <Link to='/LeaveRequest'>
                    <MenuItem name='Leave Request'  HighlighterName='Leave Request' active={activeItem === 'Leave Request'} onClick={this.handleItemClick} />
                </Link>
                <Link to='/LeaveHistory'>
                    <MenuItem name='Leave History' HighlighterName='Leave History' active={activeItem === 'Leave History'} onClick={this.handleItemClick} />
                </Link>
                <MenuItem name="Settings" HighlighterName='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick} >
                    <Dropdown text="Settings">
                        <Dropdown.Menu >
                            <Link to='/LeaveRequest'>
                                <MenuItem name="Add Employee" HighlighterName='Settings' onClick={this.handleItemClick}  icon='user' >
                                </MenuItem>
                            </Link>
                            <Link to='/holidays' >
                                <MenuItem name="Add Holidays" HighlighterName='Settings' onClick={this.handleItemClick}  icon='calendar' >
                                </MenuItem>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </MenuItem>
                
            </Menu>
        )
    }
}