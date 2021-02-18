import React from 'react';

import { Container, 
         Banner, 
         Avatar, 
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>
          Editar Perfil
        </EditButton>

        <h1>Wallyngson Guedes</h1>
        <h2>@wallyngson</h2>

        <p>
          Front-end developer at my home
        </p>

        <ul>
          <li>
            <LocationIcon />
            Campina Grande, Paraíba
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de junho de 1997
          </li>
        </ ul>
        <Followage>
          <span>
            seguindo <strong>414</strong>
          </span>
          <span>
            <strong>215 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;