import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 128, 255, ${count / 100})`,
  });

  return (
    <animated.div style={backgroundAnimation}>
      <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
        <Box fontSize="2xl" mb={4}>
          Count: {count}
        </Box>
        <Flex gap={2}>
          <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button colorScheme="red" onClick={() => setCount(count - 1)}>
            Decrement
          </Button>
          <Button colorScheme="gray" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Flex>
      </Flex>
    </animated.div>
  );
};

export default Counter;
