
import { Box, Text } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box p="2rem" bg="gray.50" minH="100vh">
      <Text fontSize="3xl" fontWeight="bold" mb="1rem">
        About Us
      </Text>
      <Text mb="1rem">
        Welcome to our Image Gallery! We are passionate about showcasing high-quality images from various photographers worldwide.
      </Text>
      <Text mb="1rem">
        Our mission is to provide a platform where users can explore, search, and enjoy stunning images curated from Pexels.
      </Text>
      <Text>
        For collaborations or inquiries, reach out to us via the contact page or our social media handles.
      </Text>
    </Box>
  );
}
