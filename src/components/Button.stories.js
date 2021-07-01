import React from 'react';
import styled from "styled-components";
import { Button, TYPES } from './Button';
import { figmaLinks } from '../shared/figmaLinks'

const Main = styled.div`
  padding: 1rem;
`;

export default {
    title: 'Design System/Button',
    component: Button,
  };
  
  export const AllButtons = (args) => (
    <Main>
      <Button>Primary</Button>
      <br/>
      <Button disabled>Primary</Button>
      <br/>
      <Button type={TYPES.TERTIARY}>Tertiary</Button>
      <br/>
      <Button type={TYPES.TERTIARY} disabled>Tertiary</Button>
      <br/>
      <Button icon="filter">Primary</Button>
      <br/>
      <Button disabled icon="filter">Primary</Button>
      <br/>
      <Button type={TYPES.TERTIARY} icon="filter">Tertiary</Button>
      <br/>
      <Button type={TYPES.TERTIARY} disabled icon="filter">Tertiary</Button>
    </Main>
  );
  AllButtons.storyName= 'all buttons';
  AllButtons.story = {
    parameters: {
       design: {
          type: 'figma',
          url: figmaLinks.buttons,
       }
    }
  };
