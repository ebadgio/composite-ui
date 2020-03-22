import React, { useState, useRef } from 'react';
import {
  Drawer,
  Tabs,
  Heading,
  Navbar,
  Flex,
  Box,
  Button,
  Tab
} from 'composite-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';

const componentTabs = [
  { text: 'Box', href: '/docs/box' },
  { text: 'Flex', href: '/docs/flex' },
  { text: 'Text', href: '/docs/text' }
];

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
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
          <Tabs vertical>
            <Link href="/docs/getting-started">
              <Tab
                variant="solid"
                active={router.pathname === '/docs/getting-started'}
              >
                Getting Started
              </Tab>
            </Link>
            <Link href="/docs/theming">
              <Tab variant="solid" active={router.pathname === '/docs/theming'}>
                Theming
              </Tab>
            </Link>
          </Tabs>
          <Heading level={3} mt={3} mb={1}>
            COMPONENTS
          </Heading>
          <Tabs vertical>
            {componentTabs.map((tab, i) => (
              <Link href={tab.href} key={i}>
                <Tab
                  variant="solid"
                  text={tab.text}
                  active={router.pathname === tab.href}
                />
              </Link>
            ))}
          </Tabs>
        </Drawer>
        <Drawer.Offset>
          <Flex width="100%" justifyContent="center">
            <Box maxWidth="750px" pt="82px" px={4}>
              {children}
            </Box>
          </Flex>
        </Drawer.Offset>
      </Flex>
    </>
  );
};

export default Layout;
