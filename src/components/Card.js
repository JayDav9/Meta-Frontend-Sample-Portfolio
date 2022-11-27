import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor={"white"}
      color="black"
      borderRadius="10px"
      align="left"
    >
      <Image src={imageSrc} alt={title} borderRadius="10px" />
      <Heading size="md" paddingX={"10px"} paddingY="5px">
        {title}
      </Heading>
      <Text paddingX={"10px"}> {description}</Text>
      <Text as="b" paddingX={"10px"} paddingY="10px">
        See more {<FontAwesomeIcon icon={faArrowRight} />}
      </Text>
    </VStack>
  );
};

export default Card;
