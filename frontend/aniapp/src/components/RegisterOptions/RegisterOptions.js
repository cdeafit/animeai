import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import './login/LogIn.css'
import FormLog from './login/FormLog.js'
import FormSign from './signup/FormSign.js'

export default function RegisterOptions() {
  
  const [state, setState] = React.useState({
      logBox: false,
      signBox: false
  });

  const toggleDrawer = (type, open) => (event) => {  
    setState({[type]:open});
  };
  
  return (
    <div>
        <React.Fragment key={'logBox'}>
          <Button onClick={toggleDrawer('logBox', true)}>Log in</Button>
          <Drawer
            anchor={'right'}
            open={state['logBox']}
            onClose={toggleDrawer('logBox', false)}
          >
            <FormLog />            
            <h6 align="center">
                Don't have an account yet? &nbsp;
                <a
                className='Redir-msg'
                onClick={toggleDrawer('logBox', false), toggleDrawer('signBox', true)}>
                    Sign up
                </a>
            </h6>
          </Drawer>
        </React.Fragment>

        <React.Fragment key={'signBox'}>
          <Button onClick={toggleDrawer('signBox', true)}>Sign up</Button>
          <Drawer
            anchor={'right'}
            open={state['signBox']}
            onClose={toggleDrawer('signBox', false)}
          >
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
                onClick={toggleDrawer('signBox', false), toggleDrawer('logBox', true)}   
                >          
                    Log in
                </a>
            </h6>            
          </Drawer>
        </React.Fragment> 
    </div>
  );
}