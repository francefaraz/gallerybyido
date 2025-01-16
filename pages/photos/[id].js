import { getPhotoById } from "../../lib/api";
import {
  Box,
  Divider,
  Center,
  Text,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { InfoIcon, AtSignIcon } from "@chakra-ui/icons";

export default function Photo({ pic }) {
  return (
    <Box p="2rem" bg="gray.200" minH="100vh">
      <Head>
        <title>Image: {pic.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex px="1rem" justify="center" align="center">
        {/* Home Button */}
        <Link href="/" passHref>
          <Button
            borderRadius="full"
            colorScheme="pink"
            fontSize="lg"
            size="lg"
            cursor="pointer"
          >
            🏠 Home
          </Button>
        </Link>

        <Spacer />

        {/* Pexels Photo Link */}
        <Box>
          <Link href={pic.url} passHref>
            {/* <a target="_blank" rel="noopener noreferrer"> */}
              <InfoIcon boxSize="2rem" color="red.500" />
            {/* </a> */}
          </Link>
        </Box>

        <Spacer />

        {/* Subscribe Button */}
        <Link
          href="https://www.youtube.com/channel/UCLwiI738ItkLmjSd9epe5fg"
          passHref
        >
          {/* <a target="_blank" rel="noopener noreferrer"> */}
            <Text
              letterSpacing="wide"
              textDecoration="underline"
              fontWeight="semibold"
              fontSize="xl"
            >
              SUBSCRIBE
            </Text>
          {/* </a> */}
        </Link>

        <Spacer />

        {/* Photographer's Profile */}
        <Link href={pic.photographer_url} passHref>
          {/* <a target="_blank" rel="noopener noreferrer"> */}
            <Text
              letterSpacing="wide"
              textDecoration="underline"
              fontWeight="semibold"
              fontSize="xl"
            >
              <AtSignIcon />
              {pic.photographer}
            </Text>
          {/* </a> */}
        </Link>

        <Spacer />

        {/* About Us */}
        <Link
          href="https://indiandevilsofficial.blogspot.com/2020/08/about-us.html"
          passHref
        >
          {/* <a target="_blank" rel="noopener noreferrer"> */}
            <Text
              letterSpacing="wide"
              textDecoration="underline"
              fontWeight="semibold"
              fontSize="xl"
            >
              ABOUT US
            </Text>
          {/* </a> */}
        </Link>
      </Flex>

      <Divider my="1rem" />

      <Center>
        {/* Photo */}
        <Box>
          <Link
            href="https://www.instagram.com/indiandevilsofficial/?hl=en"
            passHref
          >
            {/* <a target="_blank" rel="noopener noreferrer"> */}
              <Image
                src={pic.src.original}
                width={pic.width / 4}
                height={pic.height / 4}
                quality={50}
                priority
                loading="eager"
                alt={pic.alt}
              />
            {/* </a> */}
          </Link>
        </Box>
      </Center>
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  const pic = await getPhotoById(params.id);
  return {
    props: {
      pic,
    },
  };
}
