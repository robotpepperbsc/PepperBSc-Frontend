import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import headLogo from '../assets/pepper_head_logo.png';
import '../css/ConnectionToRobot.css';

class ConnectionToRobot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ipAddress: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
    }

    render () {
        return (
            <div className='connection-form'>
                <Grid textAlign='center' className="connection-grid" verticalAlign='middle'>
                    <Grid.Column className="grid-column">
                        <Image src={headLogo} fluid />
                        <Header as='h1' color='teal' textAlign='center'>
                            <p>Enter Pepper's IP</p>
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='wifi' iconPosition='left' placeholder='192.168.1.101' onChange={(e) => this.setState({ipAddress: e.target.value})}  />
                                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                                    Connect
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Start the journey!
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
    )
    }
}

export default ConnectionToRobot;