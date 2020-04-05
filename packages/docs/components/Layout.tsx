import React, { useState, useRef } from 'react';
import {
  Drawer,
  Tabs,
  Heading,
  Navbar,
  Flex,
  Box,
  Tab,
  Button,
  useWindowMatch
} from 'composite-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';

const componentTabs = [
  { text: 'Box', href: '/docs/box' },
  { text: 'Button', href: '/docs/button' },
  { text: 'Drawer', href: '/docs/drawer' },
  { text: 'Flex', href: '/docs/flex' },
  { text: 'Heading', href: '/docs/heading' },
  { text: 'Input', href: '/docs/input' },
  { text: 'Navbar', href: '/docs/navbar' },
  { text: 'Tabs', href: '/docs/tabs' },
  { text: 'Text', href: '/docs/text' },
  { text: 'Textarea', href: '/docs/textarea' }
];

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const trigger = useRef(null);
  const matches = useWindowMatch('890px');

  return (
    <>
      <Navbar
        backgroundColor="#fff"
        title={
          <Link href="/">
            <Button variant="void" height="fit-content">
              <Flex alignItems="center">
                <img src="/assets/icon.png" height="40px" />
                <Heading level={2} ml={1} my={0}>
                  COMPOSITE UI
                </Heading>
              </Flex>
            </Button>
          </Link>
        }
        boxShadow={1}
      >
        <Button
          variant="void"
          ref={trigger}
          p="0"
          onClick={() => {
            setDrawerOpen(!drawerOpen);
          }}
          style={!matches ? { display: 'none' } : { cursor: 'pointer' }}
        >
          <img src="/assets/menu-24px.svg" height="32px" />
        </Button>
      </Navbar>
      <Flex>
        <Drawer
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
        <Drawer.Offset style={{ maxWidth: '100%' }}>
          <Flex width="100%" justifyContent="center">
            <Box width="750px" pt="82px" px={4} maxWidth="100%">
              {children}
            </Box>
          </Flex>
        </Drawer.Offset>
      </Flex>
    </>
  );
};

export default Layout;
