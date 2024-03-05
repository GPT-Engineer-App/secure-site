import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShieldAlt, FaLock, FaUserShield, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" p={8}>
        <VStack align="start" spacing={4}>
          <Heading as="h1" size="xl" fontWeight="bold">
            Secure Your Premises
          </Heading>
          <Text fontSize="lg">Professional security solutions for your business and home. We've got you covered 24/7.</Text>
          <Button leftIcon={<FaPhoneAlt />} colorScheme="blue" variant="solid" size="lg">
            Contact Us
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNvbXBhbnl8ZW58MHx8fHwxNzA5NjQ2MDc3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize={{ base: "full", md: "50%" }} alt="Security Company" />
      </Flex>

      <Box py={16} backgroundColor="gray.100">
        <Heading as="h3" size="lg" textAlign="center" mb={8}>
          Our Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" gap={8}>
          <ServiceCard icon={FaShieldAlt} title="Physical Security" />
          <ServiceCard icon={FaLock} title="Access Control" />
          <ServiceCard icon={FaUserShield} title="Personal Protection" />
        </Flex>
      </Box>
    </Container>
  );
};

const ServiceCard = ({ icon: Icon, title }) => (
  <VStack p={8} bg="white" boxShadow="md" borderRadius="md" spacing={4} align="center" width={{ base: "full", md: "30%" }}>
    <Icon size="3em" />
    <Text fontWeight="semibold" fontSize="xl">
      {title}
    </Text>
    <Button colorScheme="blue" variant="outline">
      Learn More
    </Button>
  </VStack>
);

export default Index;
