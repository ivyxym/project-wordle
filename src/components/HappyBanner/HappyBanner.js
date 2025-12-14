import React from 'react';
import Banner from '../Banner';

function HappyBanner({ numOfGuessess }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuessess === 1
            ? '1 guess'
            : `${numOfGuessess} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
