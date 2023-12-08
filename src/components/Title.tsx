// Title.tsx
import { Heading } from '@chakra-ui/react';

const Title = () => {
  return (
    <Heading
      as="h2"
      size="md" // Adjust the size as needed
      textAlign="center" // Centers the heading
      fontFamily="Visby Round CF" // Set the font family to match your design
      color="gray.600" // Adjust the color as needed
      mb={4} // Margin bottom for spacing
    >
      How much do you agree with this statement?
    </Heading>
  );
};

export default Title;
