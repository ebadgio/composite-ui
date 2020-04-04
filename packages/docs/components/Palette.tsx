import { Flex, Box, Text, useTheme } from 'composite-ui';

interface ISwatchProps {
  name: string;
  hex: string;
}

const Swatch = ({ name, hex }: ISwatchProps) => {
  return (
    <Flex alignItems="flex-start" mr={5} mt={3}>
      <Box
        mr={2}
        width="48px"
        height="48px"
        borderRadius={1}
        backgroundColor={hex}
        boxShadow="inset 0px 1px 5px rgba(0,0,0,0.06)"
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

  if (Array.isArray(colors)) {
    return (
      <Flex flexWrap="wrap" width="100%" mb={4}>
        {colors.map((hex, i) => (
          <Swatch name={i.toString()} hex={hex} key={i} />
        ))}
      </Flex>
    );
  }

  return (
    <Flex flexWrap="wrap" width="100%" mb={4}>
      {Object.keys(colors).map((k, i) => (
        <Swatch name={capitalize(k)} hex={colors[k]} key={i} />
      ))}
    </Flex>
  );
};

const capitalize = (word: string) =>
  word.substring(0, 1).toUpperCase() + word.substring(1);
