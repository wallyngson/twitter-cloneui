import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Timelines = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 0.2px solid var(--outline);
  margin-top: 20px;
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  
 
  padding: 11px 11px 15px;
  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  color: var(--gray);
    
  &:hover {
    background: var(--twitter-dark-hover);
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter-dark-hover);
  }

  &.active {
    background: var(--twitter-dark-hover);
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`
