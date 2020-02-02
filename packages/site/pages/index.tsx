import React from 'react';
import { Box, Text, Flex, Button, Navbar } from '@composite-ui/core';
import Link from 'next/link';

const Main = () => {
  return (
    <Box width="100%" pt={6} pl={4}>
      <Navbar title="COMPOSITE UI">
        <Link href="/docs/getting-started">
          <Button variant="primary" width="fit-content">
            Get started
          </Button>
        </Link>
      </Navbar>
      <Flex alignItems="start">
        <Box mr={3}>
          <img src="/assets/icon.svg" height="180px" />
        </Box>
        <Flex flexDirection="column" width="450px">
          <Text fontSize={7} fontWeight="bold" color="#212121" mt={0} mb={3}>
            COMPOSITE UI
          </Text>
          <Text mt={0} mb={3} fontSize={4}>
            A simple, intuitive, and design system first React component library
          </Text>
          <Text fontWeight="bold">⚠️ Currently under development</Text>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        px={6}
        py={3}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box
          height="150px"
          width="150px"
          boxShadow={2}
          borderRadius="50%"
        ></Box>
        <Box
          height="150px"
          width="150px"
          boxShadow={2}
          borderRadius="50%"
        ></Box>
        <Box
          height="150px"
          width="150px"
          boxShadow={2}
          borderRadius="50%"
        ></Box>
      </Flex>
    </Box>
  );
};

export default Main;
