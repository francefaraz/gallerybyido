import Head from "next/head";
import React, { useState } from "react";
import {
  Box,
  Text,
  Container,
  Wrap,
  WrapItem,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getCuratedPhotos, getQueryPhotos } from "../lib/api";
import Image from "next/image";
import Link from "next/link";

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data);
  const [query, setQuery] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) {
      toast({
        title: "Error: Empty Search",
        description: "Please enter a search query.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await getQueryPhotos(query);
      setPhotos(res);
      setQuery("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch photos.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Head>
        <script
          data-ad-client="ca-pub-6920519399704945"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <title>IMAGE GALLERY BY FAR STUDIOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      {/* <Flex
        as="nav"
        bg="purple.800"
        color="white"
        p="1rem"
        justify="space-between"
        align="center"
        position="sticky"
        top="0"
        zIndex="1000"
        boxShadow="lg"
      >
        <Text fontSize="xl" fontWeight="bold" ml="2rem">
          Image Gallery
        </Text>
        <Flex gap="2rem" mr="2rem">
          <Link href="/" passHref>
            <Button variant="ghost" colorScheme="pink">
              Home
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button variant="ghost" colorScheme="pink">
              About
            </Button>
          </Link>
          <Link href="/privacy" passHref>
            <Button variant="ghost" colorScheme="pink">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms" passHref>
            <Button variant="ghost" colorScheme="pink">
              Terms of Service
            </Button>
          </Link>
        </Flex>
      </Flex> */}

      {/* Main Content */}
      <Box bg="purple.100" minH="100vh">
        <Container maxW="container.xl">
          <Text
            color="pink.800"
            fontWeight="semibold"
            mb="1rem"
            textAlign="center"
            textDecoration="underline"
            fontSize="5xl"
          >
            Pexels Image Gallery
          </Text>
          <form onSubmit={handleSubmit}>
            <InputGroup pb="1rem">
              <Input
                placeholder="Search for an image"
                variant="ghost"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  colorScheme="blue"
                  aria-label="Search"
                  icon={<SearchIcon />}
                  onClick={handleSubmit}
                />
              </InputRightElement>
            </InputGroup>
          </form>
          <Wrap spacing={4} justify="center">
            {photos.map((pic) => (
              <WrapItem
                key={pic.id}
                boxShadow="base"
                rounded="20px"
                overflow="hidden"
                bg="white"
              >
                <Link href={`/photos/${pic.id}`}>
                  <Image
                    src={pic.src.portrait}
                    height={600}
                    width={400}
                    alt={pic.alt}
                  />
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Container>

        {/* Photography Tips & Trends Section */}
        <Box mt="4rem">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="2rem">
            Photography Tips & Trends
          </Text>
          <Box bg="gray.50" p="1rem" borderRadius="lg" boxShadow="base">
            <Text fontSize="xl" mb="1rem">
              Welcome to our Image Gallery! Discover the latest photography
              trends, tips for taking stunning shots, and explore amazing
              collections of high-quality images.
            </Text>
            <Text fontSize="lg">
              Photography has evolved into an essential art form. From creative
              street shots to stunning nature landscapes, images have the power
              to tell stories and evoke emotions. Here, we feature curated
              content to help you explore and appreciate the art of photography.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const data = await getCuratedPhotos();
    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
}
