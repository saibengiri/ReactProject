import React, { Component } from 'react';
import { Container,Header, Grid, Icon, Button,Segment, } from 'semantic-ui-react'
import MyCalendar from './Calendar'
export default class Dashboard extends Component{
    render(){
        return(
            <Container fluid style={{"margin":'5px'}}>
                <Grid equal columns>
                    <Grid.Row>
                        <Grid.Column width={8} style={{"padding-right":'0px'}}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16} >
                                        <Segment color='blue'>
                                            <Header> My Tasks</Header>
                                            
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16} >
                                        <Segment color='blue'>
                                            <Header>My Holidays</Header>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            
                        </Grid.Column>
                        <Grid.Column width={8}  style={{"padding-left":'0px'}}>
                        <Grid>
                        <Grid.Row>
                            <Grid.Column width={16} style={{"padding-right":'0px'}}>
                                <Segment color='blue'>
                                    <Header>My Holiday Calendar</Header>
                                    <hr/>
                                    <MyCalendar></MyCalendar>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            </Container>
        )
    }
}