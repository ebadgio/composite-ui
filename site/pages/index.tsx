import React from 'react';
import { Box, Text, Flex, Button, Navbar } from 'composite-ui';
import Link from 'next/link';

const Main = () => {
  return (
    <Box width="100%" pt={6} px={4}>
      <Navbar title="COMPOSITE UI">
        <Link href="/docs/getting-started">
          <Button variant="primary" width="fit-content">
            Get started
          </Button>
        </Link>
      </Navbar>
      <Flex alignItems="start" flexWrap="wrap">
        <Box mr={3}>
          <img src="/assets/icon.png" height="150px" />
        </Box>
        <Flex flexDirection="column" width="450px">
          <Text fontSize={6} fontWeight="bold" color="#212121" mt={0} mb={3}>
            COMPOSITE UI
          </Text>
          <Text mt={0} mb={3} fontSize={4}>
            A simple, intuitive, and design system first React component library
          </Text>
          <Text fontWeight="bold">⚠️ Still in early development</Text>
          <Flex>
            <Link href="/docs/getting-started">
              <Button variant="primary">Get Started</Button>
            </Link>
            <a
              href="https://www.github.com/ebadgio/composite-ui"
              target="_blank"
            >
              <Button variant="outline.primary" ml={3}>
                Github
              </Button>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Main;
