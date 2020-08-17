import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Image, Grid, Header, List, Embed } from 'semantic-ui-react'
import headshot from './Headshot.jpg'
import banner from './ElephantSanctuaryBanner.jpg'

function App() {
  return (
    <div className="App">
      <Grid columns={2} padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Image src={banner} fluid/>
            <Image className='header-img' src={headshot} circular centered/>
            <Header
              as='h1'
              content='Andrew Lawler'
              subheader='Full Stack Software Engineer'
              centered
              className='title'
            />
          </Grid.Column>
        </Grid.Row>
          <Grid.Row columns={2}>
              <Grid.Column floated='left'>
                  <Header
                  content='Contact Information'
                  as='h2'
                  />
                  <List className='contacts'>
                    <List.Item content = 'Andrew.R.Lawler@gmail.com' />
                    <List.Item content = '651-325-8111' />
                    <List.Item>
                      <a href='https://www.linkedin.com/in/andrew-lawler-blrd2272/'>https://www.linkedin.com/in/andrew-lawler-blrd2272/</a>
                    </List.Item>
                    <List.Item>
                      <a href='https://twitter.com/Andrew_R_Lawler'>@Andrew_R_Lawler</a>
                    </List.Item>
                  </List>
              </Grid.Column>
              <Grid.Column floated='right'>
                <Header
                    content='Personal Bio'
                    as='h2'
                    />
                <p className='bio'>Andrew Lawler is a passionate lover of all technology on the bleeding edge. He love's to support interesting passion-projects from others in the tech field. Andrew builds and maintains his own computers and loves to help friends and family create machines that fit their personal needs.
                Andrew has a penchant for creating positive experiences, that has been developed through years of fine dining experience. He is driven by the pursuit of making the world a better place for those around him.</p>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header
                as='h2'
                content='PanTree'
                subheader='Personal Project Presentation'
                centered
              />
              <Embed
                id='gl8cqD_pY7I'
                placeholder='/images/image-16by9.png'
                source='youtube'
              />
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
