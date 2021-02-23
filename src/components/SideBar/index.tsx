import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body } from './styles';

const SideBar: React.FC = () => {
  return (
  
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter..." />
        <SearchIcon />
      </SearchWrapper>
      
      <StickyBox>
        <Body>
          <List 
            title='Talvez você curta'
            elements={[
              <FollowSuggestion 
                name='Wellyngson Guedes'
                nickname='@littlebutterfly'
              />,

              <FollowSuggestion 
                name='Rhalise Estrela'
                nickname='@rhalise'
              />,

              <FollowSuggestion 
                name='Nise Ferreira'
                nickname='@niseferreira'
              />,
            ]}
          />
          
          <List 
            title='Notícias'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List 
            title='Notícias'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List 
            title='Notícias'
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;