import React, { Component } from 'react';
import { Modal, Grid,Icon, Dropdown } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';

import  'semantic-ui-css/semantic.min.css';
import Navigation from './Navigation'
import LoginForm from './LoginForm'

class Header extends Component {
    login(user) {
        this.setState({
          user: user
        }, () => {      
          debugger;
          this.setUserProfile(this.state.user);      
          this.setState({
                openLoginModal:false,
                isUserLoggedIn:true
          },function () {
            console.log("login_user   "+JSON.stringify(this.state.user))});
        });   
      }  
      
    setUserProfile(user) {
      debugger;
      localStorage.setItem('CurrentUser', JSON.stringify(user));
      
    }
    
    getUserProfile() {
      if(localStorage.getItem('CurrentUser')) {
        this.setState({
          user: JSON.parse(localStorage.getItem('CurrentUser'))
        },function () {
          console.log("getUserProfile_user  "+ JSON.stringify(this.state.user))})
      }
    }  
    
    showLoginModal() {    
      this.setState({
        openLoginModal: true
      },function () {
        console.log("showLoginModal_openLoginModal  "+this.state.openLoginModal)});
    }
    SignOut() {
      this.setState({
        openLoginModal:true,
        user:{},
        isUserLoggedIn:false,
      },function () {
        console.log("signOut_User   " + JSON.stringify(this.state.user))})

        
        

    }
    closeLoginModal() {
      this.setState({
        openLoginModal: false
      },function () {
        console.log("closeLoginModal_openLoginModal   "+this.state.openLoginModal)});
    }

    constructor(props){
        super(props);
        this.state={
            isUserLoggedIn:false,
            openLoginModal:false,
            user:{}
        }
        this.login = this.login.bind(this);      
        this.setUserProfile = this.setUserProfile.bind(this);
        this.getUserProfile = this.getUserProfile.bind(this);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.SignOut = this.SignOut.bind(this);
    }
    componentWillMount(){
      localStorage.setItem('CurrentUser', JSON.stringify({"userName":"saiprasadb","userCode":"A15027","userId":1,"name":"Saiprasad Bengiri","role":["SysAdmin"],"manager":"Pathamesh Gawade","managerId":2}));
      this.setState({isUserLoggedIn:true},function(){console.log("In Compnent Will Mount set state callback")})
      this.getUserProfile();
    }
    componentDidMount(){
      this.showLoginModal();  
      //debugger;
      //this.getUserProfile();
    } 
    
    render(){
      let DropdownOptions=[
        {
            key: 'Notification',
            text:<span><Icon name="bell" size='small'/>Notification</span>
        },
        { 
          key: 'signOut',
          text: <div className='box' onClick={this.SignOut}><Icon name="sign out" size='small'/>Sign Out</div>
        }
    ] 
        return(
            <div className="App">
              <Grid columns='equal'>
              
                <Grid.Column width={13}>
                  <div className="App-header">
                    <div className="App-title" id='gradient'><h2>Leave Management System</h2></div>
                    
                  </div>
                </Grid.Column>
                <Grid.Column >
                  {!(this.state.isUserLoggedIn)?'':
                    <div className="App-user"> 
                      <Dropdown style={{"margin-top":'5px',}} trigger={(
                            <div className="App-userName">
                                <Icon className="App-usericon"  size='small'  name='user' /> 
                                Hi {(this.state.user.name)?this.state.user.name:'Guest'}
                              </div>
                            )} options={DropdownOptions} />
                        
                    </div>
                  }
                </Grid.Column>
                
            
              </Grid>
              {(this.state.isUserLoggedIn)?<Navigation  />:<LoginModal login={this.login} open={this.state.openLoginModal} size="tiny"/>}
            </div>
        );
    }
}
class LoginModal extends Component {  
    render() {
      return (
        <Modal open={this.props.open} size='small'>          
          <LoginForm  onLogin={this.props.login} />
        </Modal> 
      )
    }
  }

export default Header;