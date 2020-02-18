import React, { useState } from 'react';
import {
  Drawer,
  Tabs,
  Heading,
  Navbar,
  Flex,
  Box,
  useWindowMatch,
  Button
} from '@composite-ui/core';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const matches = useWindowMatch('790px');

  return (
    <>
      <Navbar
        backgroundColor="#fff"
        title={
          <Flex alignItems="center">
            <img src="/assets/icon.png" height="40px" />
            <Heading level={2} ml={2}>
              COMPOSITE UI
            </Heading>
          </Flex>
        }
        boxShadow={1}
      >
        {matches && (
          <Button onClick={() => setDrawerOpen(!drawerOpen)}>Menu</Button>
        )}
      </Navbar>
      <Drawer
        borderRight={`1px solid #EEF0F2`}
        pt="82px"
        responsive
        shouldHideAtWidth="790px"
      >
        <Tabs
          vertical
          activeTab={activeTab}
          variant="solid"
          tabs={[{ text: 'Getting started' }, { text: 'Theming' }]}
          onTabChange={(_, id) => {
            setActiveTab(id);
          }}
        ></Tabs>
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
        <Box width="100%" pt="50px" pl={3}>
          {children}
        </Box>
      </Drawer.Offset>
    </>
  );
};

export default Layout;
