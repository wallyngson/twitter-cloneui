import styled, { css }from "styled-components";
import { LocationOn, Cake } from '../../styles/Icons'
import Button from '../Button'

import AvatarProfile from '../../images/banner-profile.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Não aparecer a barra de scroll */
  } 
`

export const Banner = styled.div`
  flex-shrink: 0; /* Não encolher de tamanho ...*/
  
  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);
  
  position: relative;

  > img {
    width: 100%;
    height: 100%;
  }
`

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3px solid var(--primary);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
` 

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      display: flex;
      align-items: center;
      
      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }

  } 
` 

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

   & + span {
     margin-left: 20px;
   }
  }

` 

const iconsCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`

export const LocationIcon = styled(LocationOn)`${iconsCSS}` 
export const CakeIcon = styled(Cake)`${iconsCSS}` 

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`
