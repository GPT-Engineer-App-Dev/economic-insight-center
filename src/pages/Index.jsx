import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" py={10} bg="gray.100">
        <Container maxW="container.lg">
          <VStack spacing={4} align="start">
            <Heading as="h2" size="2xl">Main Headline Article</Heading>
            <Text fontSize="lg">
              This is the main headline article. It is prominently displayed to catch the reader's attention.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Article Title 1</Heading>
              <Text>This is a brief description of the first article.</Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Article Title 2</Heading>
              <Text>This is a brief description of the second article.</Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>Article Title 3</Heading>
              <Text>This is a brief description of the third article.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={2}>Contact Information</Heading>
              <Text>123 Financial St, Money City, Economy</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>Privacy Policy</Heading>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Read our privacy policy</Link>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>Terms of Service</Heading>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Read our terms of service</Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;