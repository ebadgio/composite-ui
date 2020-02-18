import React, { useState, useRef } from 'react';
import {
  Drawer,
  Tabs,
  Heading,
  Navbar,
  Flex,
  Box,
  //useWindowMatch,
  Button,
  Tab
} from '@composite-ui/core';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);
  //const matches = useWindowMatch('790px');
  const trigger = useRef(null);

  return (
    <>
      <Navbar
        backgroundColor="#fff"
        title={
          <Link href="/">
            <Flex alignItems="center">
              <img src="/assets/icon.png" height="40px" />
              <Heading level={2} ml={2}>
                COMPOSITE UI
              </Heading>
            </Flex>
          </Link>
        }
        boxShadow={1}
      >
        <Button ref={trigger} onClick={() => setDrawerOpen(!drawerOpen)}>
          Menu
        </Button>
      </Navbar>
      <Flex>
        <Drawer
          borderRight={`1px solid #EEF0F2`}
          pt="82px"
          responsive
          shouldHideAtWidth="890px"
          triggerRef={trigger}
          open={drawerOpen}
        >
          <Tabs
            vertical
            activeTab={activeTab}
            onTabChange={(_, id) => {
              setActiveTab(id);
            }}
          >
            <Link href="/docs/getting-started">
              <Tab
                variant="solid"
                active={activeTab === 0}
                onClick={() => setActiveTab(0)}
              >
                Getting Started
              </Tab>
            </Link>
            <Link href="/docs/theming">
              <Tab
                variant="solid"
                active={activeTab === 1}
                onClick={() => setActiveTab(1)}
              >
                Theming
              </Tab>
            </Link>
          </Tabs>
          <Heading level={3} color="#424242" mt={3} mb={1}>
            COMPONENTS
          </Heading>
          <Tabs
            vertical
            activeTab={activeTab - 2}
            variant="solid"
            tabs={[{ text: 'Box' }, { text: 'Flex' }, { text: 'Text' }]}
            onTabChange={(_, id) => {
              setActiveTab(id + 2);
            }}
          ></Tabs>
        </Drawer>
        <Drawer.Offset>
          <Box width="500px" pt="50px" pl={3}>
            {children}
          </Box>
        </Drawer.Offset>
      </Flex>
    </>
  );
};

export default Layout;
