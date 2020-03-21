import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import * as CompositeUI from 'composite-ui';
import { mdx } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/nightOwlLight';

const scope = {
  ...CompositeUI,
  mdx
};

const Code = ({ children, className, live }) => {
  const language = className && className.split('language-')[1];

  const theme = CompositeUI.useTheme();
  const editorStyles = {
    background: theme.colors.background.secondary,
    marginTop: '16px',
    marginBottom: '32px',
    borderRadius: '4px'
  };

  const code = children.trim();

  if (live) {
    return (
      <LiveProvider
        language={language}
        code={code}
        scope={scope}
        theme={prismTheme}
        transformCode={code => `/** @jsx mdx */${code}`}
      >
        <LivePreview style={{ fontFamily: 'Roboto' }} />
        <LiveError />
        <LiveEditor
          style={editorStyles}
          // @ts-ignore
          padding={16}
        />
      </LiveProvider>
    );
  }
  const preStyles = {
    background: theme.colors.background.secondary,
    padding: '16px',
    borderRadius: '4px'
  };
  return (
    <Highlight
      {...defaultProps}
      code={code}
      theme={prismTheme}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={preStyles}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
