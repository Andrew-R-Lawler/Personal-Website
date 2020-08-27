import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Headshot from '../Headshot.jpg'

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

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const LeftImage = () => (
  <Image
    floated='left'
    size='small'
    src={Headshot}
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)


export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
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

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

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
              <Menu.Item as='a'>Project Blog</Menu.Item>
            </Container>
          </Menu>
        </Visibility>

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