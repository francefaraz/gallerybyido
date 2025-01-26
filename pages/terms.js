import { Box, Text } from "@chakra-ui/react";

export default function TermsOfService() {
  return (
    <Box p="2rem" bg="gray.50" minH="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb="1rem">
        Terms of Service
      </Text>
      <Text mb="1rem">
        By accessing and using our website, you agree to comply with our terms. Do not use our content or services for illegal or unauthorized purposes.
      </Text>
      <Text mb="1rem">
        We reserve the right to modify or discontinue our services at any time without prior notice.
      </Text>
      <Text>
        If you have any questions, contact us for clarification.
      </Text>
    </Box>
  );
}
