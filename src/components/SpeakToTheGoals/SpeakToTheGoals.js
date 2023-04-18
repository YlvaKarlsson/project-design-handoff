import React from 'react';
import { StartButton } from 'components/StartButton';
import { Container,
  InnerContainer } from 'styles/Container.style';

export const SpeakToTheGoals = () => {
  return (
    <Container>
      <InnerContainer>
        Hej
        <StartButton cta>Get started</StartButton>
      </InnerContainer>
    </Container>

  )
}