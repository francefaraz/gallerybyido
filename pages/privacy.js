import { Box, Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Box p="2rem" bg="gray.50" minH="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb="1rem">
        Privacy Policy
      </Text>
      <Text mb="1rem">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
      </Text>
      <Text mb="1rem">
        We use cookies to enhance your browsing experience and serve ads through Google AdSense. By using this site, you agree to our use of cookies.
      </Text>
      <Text>
        For more details, feel free to contact us via our contact page.
      </Text>
    </Box>
  );
}
