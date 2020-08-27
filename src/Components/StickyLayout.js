import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Embed,
} from 'semantic-ui-react'
import Headshot from '../Headshot.jpg'
import Pretsl from '../Components/pretsl.jpg'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const LeftImage = () => (
  <Image
    floated='left'
    size='small'
    src={Headshot}
    style={{ margin: '2em 2em 2em -4em' }}
  />
)


export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    blogView: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  switchToBlog = () => this.setState({ blogView: true })
  
  switchToContact = () => this.setState({ blogView: false })

  render() {
    const { menuFixed } = this.state

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        <Container text style={{ marginTop: '2em' }}>
          <LeftImage />
          <Header as='h1'>Andrew Lawler</Header>
          <p>
          Motivated professional who is passionate about user experience, equity, and diversity with the goal of encouraging positive impacts. Growth and development, on both an individual and organizational level have always been the center of my attention, while keeping focus on current research, technologies, and methodologies. 
          </p>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item header>Professional Portfolio</Menu.Item>
                {this.state.blogView ? 
                <Menu.Item as='a' onClick={this.switchToContact}>Contact Information</Menu.Item>
                :
                <Menu.Item as='a' onClick={this.switchToBlog}>Project Blog</Menu.Item>
                }
            </Container>
          </Menu>
        </Visibility>

        {this.state.blogView ?
            <Container text>
                <Header as='h2'>Project Blog</Header>
                    <Header as='h3' sub>PanTree</Header>
                    <span>Recipe Search/Kitchen Inventory Management</span>
                    <p>PanTree streamlines the cooking experience in the kitchen by providing a central location to find and save recipes, populate shopping lists, and track kitchen inventory.</p>
                    <p>GitHub Repository: <a href='https://github.com/Andrew-R-Lawler/PanTree'>https://github.com/Andrew-R-Lawler/PanTree</a></p>
                    <Embed
                        id='R1YRQa6cybU'
                        placeholder='../favicon.ico'
                        source='youtube'
                    />
                    <Header as='h3' sub>Pretsl</Header>
                    <span>On-Boarding Application</span>
                    <p>Pretsl run’s a merchant center that serves smaller, less represented, food markets and caterers. However, Timi, the founder, approached us with an issue with the current onboarding process.
                    With our onboarding application we were able to cut a number of steps from their current onboarding process. The app also acts as a  centralized location for communication between Pretsl’s sales force and customers using an integrated support and emailing system.
                    For the front end of this project we used the React.js framework, our backend was run on an Node.js express server, and our database was hosted on an AWS RDS PostgreSQL server.</p>
                    <p>GitHub Repository: <a href='https://github.com/Andrew-R-Lawler/pretsl-onboarding'>https://github.com/Andrew-R-Lawler/pretsl-onboarding</a></p>
                    <Embed
                        id='rMEMIeJHH74'
                        placeholder={Pretsl}
                        source='youtube'
                    />
            </Container>
        :
        <Container text>
            <Header as='h2'>Contact Information</Header>
                <p>Email: Andrew.R.Lawler@gmail.com</p>
                <p>Phone: 651-325-8111</p>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/andrew-lawler-blrd2272/'>https://www.linkedin.com/in/andrew-lawler-blrd2272/</a></p>
                <p>Twitter: <a href='https://twitter.com/Andrew_R_Lawler'>@Andrew_R_Lawler</a></p>
            <Header as='h2'>Personal Bio</Header>
                <p>Andrew Lawler is a passionate lover of all technology on the bleeding edge. He love's to support interesting passion-projects from others in the tech field. Andrew builds and maintains his own computers and loves to help friends and family create machines that fit their personal needs.
                Andrew has a penchant for creating positive experiences, that has been developed through years of fine dining experience. He is driven by the pursuit of making the world a better place for those around him.</p>
            <Header as='h2'>Technical Skills</Header>
            <List horizontal size='big'>
                <List.Item>React</List.Item>
                <List.Item>Redux</List.Item>
                <List.Item>Redux-Sagas</List.Item>
                <List.Item>JavaScript</List.Item>
                <List.Item>Node.js</List.Item>
                <List.Item>Express</List.Item>
                <List.Item>PostgreSQL</List.Item>
                <List.Item>SQL</List.Item>
                <List.Item>EC2</List.Item>
                <List.Item>RDS</List.Item>
                <List.Item>EBS</List.Item>
                <List.Item>CSS</List.Item>
                <List.Item>HTML5</List.Item>
                <List.Item>jQuery</List.Item>
                <List.Item>Bootstrap</List.Item>
                <List.Item>Semantic React</List.Item>
                <List.Item>Python</List.Item>
                <List.Item>AWS</List.Item>
            </List>
        </Container>
        }
        

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
                  <Header inverted as='h4' content="Let's create something beautiful together." />
                  <p>
                    Making the world a better place with every passing day.
                  </p>
            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}