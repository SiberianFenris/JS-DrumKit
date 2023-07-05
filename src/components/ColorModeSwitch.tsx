import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleColors = {
    off: "gray.400", // Grey color for the off state
    on: "green.300", // Green color for the on state
  };

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        css={{
          "& .chakra-switch__track": {
            backgroundColor: toggleColors.off,
            borderWidth: "2px",
            borderColor: "darkgray",
          },
          "& .chakra-switch__thumb": {
            backgroundColor: "darkgrey",
            border: "2px solid darkgray", // Add the grey border around the thumb
          },
          "& .chakra-switch__checkbox:checked + .chakra-switch__track": {
            backgroundColor: toggleColors.on,
          },
        }}
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
