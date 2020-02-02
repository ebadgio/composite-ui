import React from 'react';
import { Sidebar, Tabs, Heading, Navbar, Flex, Box } from '@composite-ui/core';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
      <Navbar
        backgroundColor="#fff"
        title={
          <Flex alignItems="center">
            <img src="/assets/icon.svg" height="40px" />
            <Heading level={2} ml={2}>
              COMPOSITE UI
            </Heading>
          </Flex>
        }
        boxShadow={1}
      >
        <div />
      </Navbar>
      <Sidebar borderRight={`1px solid #EEF0F2`} pt="82px">
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
      </Sidebar>
      <Sidebar.Offset>
        <Box width="100%" pt="50px" pl={3}>
          {children}
        </Box>
      </Sidebar.Offset>
    </>
  );
};

export default Layout;
