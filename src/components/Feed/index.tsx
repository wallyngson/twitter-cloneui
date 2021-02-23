import React from 'react';

import { Container, Tab, Tweets, Timelines } from './styles';
import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Timelines>
        <Tab className='active'>Tweets</Tab>
        <Tab>Tweets e respostas</Tab>
        <Tab>Mídia</Tab>
        <Tab>Curtidas</Tab>
      </Timelines>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;
