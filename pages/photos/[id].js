import { getPhotoById } from "../../lib/api";
import {
  Box,
  Divider,
  Center,
  Text,
  Flex,
  Spacer,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { InfoIcon, AtSignIcon } from "@chakra-ui/icons";
import { FaInstagram, FaYoutube, FaCamera } from "react-icons/fa";

export default function Photo({ pic }) {
  return (
    <Box
      p="2rem"
      bgGradient="linear(to-r, purple.100, blue.100)"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Head>
        <title>{pic.alt || `Image ${pic.id}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Photo Details Section */}
      <Box
        bg="white"
        boxShadow="xl"
        rounded="lg"
        p="2rem"
        maxW="800px"
        textAlign="center"
      >
        {/* Photo */}
        <Image
          src={pic.src.original}
          width={pic.width / 2}
          height={pic.height / 2}
          quality={80}
          alt={pic.alt}
          style={{ borderRadius: "15px" }}
        />

        {/* Photo Information */}
        <VStack spacing={4} mt="1.5rem">
          <Text fontSize="2xl" fontWeight="bold" color="purple.700">
            {pic.alt || "Untitled Image"}
          </Text>
          <HStack spacing={6}>
            <Link href={pic.photographer_url} passHref>
              <Button
                leftIcon={<AtSignIcon />}
                colorScheme="pink"
                variant="outline"
              >
                {pic.photographer}
              </Button>
            </Link>
            <Link href={pic.url} passHref>
              <Button leftIcon={<Icon as={FaCamera} />} colorScheme="blue">
                View on Pexels
              </Button>
            </Link>
          </HStack>
        </VStack>

        {/* Divider */}
        <Divider my="2rem" />

        {/* Social Links */}
        <HStack justify="center" spacing={8}>
          <Link
            href="https://www.instagram.com/indiandevilsofficial/?hl=en"
            passHref
          >
            <Button
              leftIcon={<Icon as={FaInstagram} />}
              colorScheme="pink"
              variant="solid"
            >
              Instagram
            </Button>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCLwiI738ItkLmjSd9epe5fg"
            passHref
          >
            <Button
              leftIcon={<Icon as={FaYoutube} />}
              colorScheme="red"
              variant="solid"
            >
              YouTube
            </Button>
          </Link>
          <Link
            href="https://indiandevilsofficial.blogspot.com/2020/08/about-us.html"
            passHref
          >
            <Button colorScheme="teal" variant="outline">
              About Us
            </Button>
          </Link>
        </HStack>
      </Box>

      {/* Back to Home */}
      <Box mt="4rem">
        <Link href="/" passHref>
          <Button
            size="lg"
            colorScheme="purple"
            variant="solid"
            rounded="full"
            boxShadow="lg"
          >
            🏠 Back to Home
          </Button>
        </Link>
      </Box>
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


// import { getPhotoById } from "../../lib/api";
// import {
//   Box,
//   Divider,
//   Center,
//   Text,
//   Flex,
//   Spacer,
//   Button,
//   VStack,
//   HStack,
//   Icon,
//   Badge,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Head from "next/head";
// import Link from "next/link";
// import { InfoIcon, AtSignIcon } from "@chakra-ui/icons";
// import { FaYoutube, FaInstagram, FaArrowLeft } from "react-icons/fa";

// export default function Photo({ pic }) {
//   return (
//     <Box bg="gray.100" minH="100vh" p="2rem">
//       <Head>
//         <title>{`Photo: ${pic.alt || "Image Details"}`}</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Navigation */}
//       <Flex
//         align="center"
//         justify="space-between"
//         p="1rem"
//         bgGradient="linear(to-r, purple.600, pink.500)"
//         borderRadius="lg"
//         color="white"
//         mb="2rem"
//         boxShadow="lg"
//       >
//         <HStack spacing="1rem">
//           <Link href="/" passHref>
//             <Button
//               leftIcon={<FaArrowLeft />}
//               colorScheme="pink"
//               variant="solid"
//               fontWeight="bold"
//             >
//               Back to Home
//             </Button>
//           </Link>
//         </HStack>

//         <Text fontSize="2xl" fontWeight="bold" letterSpacing="wide">
//           Photo Details
//         </Text>
//       </Flex>

//       {/* Main Content */}
//       <Box bg="white" p="4rem" borderRadius="lg" boxShadow="xl">
//         <Center mb="2rem">
//           <Image
//             src={pic.src.original}
//             width={pic.width / 3}
//             height={pic.height / 3}
//             quality={75}
//             priority
//             alt={pic.alt}
//             style={{ borderRadius: "15px" }}
//           />
//         </Center>

//         <VStack spacing="1rem" align="start">
//           <Badge
//             fontSize="1rem"
//             colorScheme="purple"
//             p="0.5rem 1rem"
//             borderRadius="lg"
//           >
//             {pic.alt || "Untitled"}
//           </Badge>

//           <Text fontSize="lg" fontWeight="bold">
//             Photographer:{" "}
//             <Link href={pic.photographer_url} passHref>
//               <Text
//                 as="span"
//                 color="purple.600"
//                 _hover={{ textDecoration: "underline", color: "purple.800" }}
//               >
//                 {pic.photographer}
//               </Text>
//             </Link>
//           </Text>

//           <Text fontSize="md" color="gray.600">
//             Resolution: {pic.width} x {pic.height}
//           </Text>

//           <Text fontSize="md" color="gray.600">
//             License: Free to use (via Pexels)
//           </Text>
//         </VStack>

//         <Divider my="2rem" />

//         {/* Footer Links */}
//         <Flex justify="space-between" align="center">
//           <Link href={pic.url} passHref>
//             <Button
//               leftIcon={<InfoIcon />}
//               colorScheme="blue"
//               variant="outline"
//               size="lg"
//             >
//               View on Pexels
//             </Button>
//           </Link>

//           <HStack spacing="1rem">
//             <Link
//               href="https://www.instagram.com/indiandevilsofficial/?hl=en"
//               passHref
//             >
//               <Button
//                 leftIcon={<FaInstagram />}
//                 colorScheme="pink"
//                 variant="solid"
//               >
//                 Instagram
//               </Button>
//             </Link>

//             <Link
//               href="https://www.youtube.com/channel/UCLwiI738ItkLmjSd9epe5fg"
//               passHref
//             >
//               <Button
//                 leftIcon={<FaYoutube />}
//                 colorScheme="red"
//                 variant="solid"
//               >
//                 Subscribe
//               </Button>
//             </Link>
//           </HStack>
//         </Flex>
//       </Box>
//     </Box>
//   );
// }

// export async function getServerSideProps({ params }) {
//   const pic = await getPhotoById(params.id);
//   return {
//     props: {
//       pic,
//     },
//   };
// }
