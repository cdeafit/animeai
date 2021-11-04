import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './SignUp.css'
import FormSign from './FormSign.js'
import LogIn from '../login/LogIn.js'


export default function SigUpDrawer() {
  const [state, setState] = React.useState(false);

  var toggleDrawer = (open) => () => {  
    setState(open);
  };

  
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Sign up</Button>         
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
        <FormSign />
        <h6 align="center">
          By signing up you agree to our
          <br />
          <a 
          className='Redir-msg'
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer">
            Terms and conditions
          </a>
          <br /><br />
          Do you have an account? &nbsp;
          <a 
          className='Redir-msg'
          onClick={toggleDrawer(false)}          
          target="_blank"
          rel="noopener noreferrer">          
            Log in
          </a>
        </h6>
      </Drawer>
    </div>
  );
}