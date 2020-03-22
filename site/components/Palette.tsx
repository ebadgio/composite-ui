import { Flex, Box, Text, useTheme } from 'composite-ui';

interface ISwatchProps {
  name: string;
  hex: string;
}

const Swatch = ({ name, hex }: ISwatchProps) => {
  return (
    <Flex alignItems="flex-start" mr={4}>
      <Box
        mr={2}
        width="48px"
        height="48px"
        borderRadius={1}
        backgroundColor={hex}
      />
      <Flex flexDirection="column">
        <Text m={0} fontWeight={600}>
          {name}
        </Text>
        <Text m={0}>{hex}</Text>
      </Flex>
    </Flex>
  );
};

interface IPaletteProps {
  group: string;
}

export const Palette = ({ group }: IPaletteProps) => {
  const theme = useTheme();

  const colors = theme.colors[group];

  return (
    <Flex flexWrap="wrap" width="100%">
      {Object.keys(colors).map(k => (
        <Swatch name={capitalize(k)} hex={colors[k]} />
      ))}
    </Flex>
  );
};

const capitalize = (word: string) =>
  word.substring(0, 1).toUpperCase() + word.substring(1);
