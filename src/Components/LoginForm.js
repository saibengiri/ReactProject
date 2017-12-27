import React, { Component } from 'react';
import { Icon, Header, Grid, Form, Segment, Button, Message, Label, Input } from 'semantic-ui-react';
import users from '../data/Users';

class LoginForm extends Component {
    handleSubmit(e) {        debugger;      
        let user = users.filter(user => user.userName === this.state.username);  
        this.setState({error: false, success: false, disabled: true, submitBtnLoading: true});
        setTimeout(() => {
            if(user.length === 0) {
                this.setState({error: true, success: false, disabled: false, submitBtnLoading: false});
            }             
            else if (user[0].password !== this.state.password) {
                this.setState({error: true, success: false, disabled: false, submitBtnLoading: false});
            }
            else {            
                this.setState({error: false, success: true, disabled: false, submitBtnLoading: false});
                delete user[0]['password']
                this.props.onLogin(user[0]);
            }
        }, 3000);
    }

    handleChange(e) {
        this.setState({error: false, success: false});
        if(e.target.name === 'username')
            this.setState({username: e.target.value })
        else 
            this.setState({password: e.target.value })        
    }
   

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false,
            success: false,
            disabled: false,
            submitBtnLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }    

    render() {
        return (
            <Grid centered columns={1} verticalAlign='middle'>
                <Grid.Column>  
                    <Segment raised
                        style={{"background-color":'#0b345d !important;',"color":'#0b345d !important',}}>
                        <Label 
                            as='a' 
                            color='white' 
                            size='huge'                                                       
                            ribbon>Leave Management System</Label>
                        <Header as='h3' textAlign='center' color='white'>Login </Header>
                        <Form 
                            onSubmit={this.handleSubmit} 
                            error={this.state.error} 
                            success={this.state.success}
                            disabled={this.state.disabled} >
                        <Message
                            error
                            header='Incorrect username or password'
                            content='Please enter correct username and password.'
                            />
                        <Message
                            success
                            header='Correct username and password'
                            content='Logged in successfully.'
                            />
                            <Form.Field>
                                <label>Username</label>
                                <Input name='username' focus icon='user' iconPosition='left' placeholder='Enter username' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Input name='password' icon='lock' iconPosition='left' placeholder='Enter password' type='password' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>                            
                            </Form.Field>
                            <Button type='submit' 
                                fluid 
                                color='white'
                                loading={this.state.submitBtnLoading}>
                                <Icon name='send'/>Submit
                            </Button>
                        </Form>
                    </Segment>                  
                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginForm;