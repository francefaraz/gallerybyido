import { Box, Flex, Text, Button, HStack, Icon } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaLock, FaFileAlt } from "react-icons/fa";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        bgGradient="linear(to-r, purple.600, pink.500)"
        color="white"
        p="1rem"
        justify="space-between"
        align="center"
        position="sticky"
        top="0"
        zIndex="1000"
        boxShadow="lg"
      >
        {/* Logo */}
        <Text
          fontSize="2xl"
          fontWeight="bold"
          ml="2rem"
          letterSpacing="wide"
          cursor="pointer"
          _hover={{ color: "yellow.300" }}
        >
          Image Gallery
        </Text>

        {/* Links */}
        <HStack spacing="2rem" mr="2rem">
          <Link href="/" passHref>
            <Button
              variant="ghost"
              color="white"
              _hover={{
                bg: "whiteAlpha.300",
              }}
              leftIcon={<Icon as={FaHome} />}
            >
              Home
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              variant="ghost"
              color="white"
              _hover={{
                bg: "whiteAlpha.300",
              }}
              leftIcon={<Icon as={FaInfoCircle} />}
            >
              About
            </Button>
          </Link>
          <Link href="/privacy" passHref>
            <Button
              variant="ghost"
              color="white"
              _hover={{
                bg: "whiteAlpha.300",
              }}
              leftIcon={<Icon as={FaLock} />}
            >
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms" passHref>
            <Button
              variant="ghost"
              color="white"
              _hover={{
                bg: "whiteAlpha.300",
              }}
              leftIcon={<Icon as={FaFileAlt} />}
            >
              Terms of Service
            </Button>
          </Link>
        </HStack>
      </Flex>

      {/* Page Content */}
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
