import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { IoLogoPython } from "react-icons/io";

const LoginPage = () => {
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      maxWidth="400px"
      mx="auto"
      flexDirection="column"
    >
      <Heading 
         display="flex" 
         alignItems="center" 
         fontSize="50px"
         mb="30px"
      >
        <IoLogoPython color="#38a169"/>
        Tasker
      </Heading>

      <Stack spacing={3} w="100%">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Podaj adres email" />
        </FormControl>

        <FormControl>
          <FormLabel>Hasło</FormLabel>
          <Input placeholder="Podaj swoje hasło" />
        </FormControl>

        <Button colorScheme="green" size="lg">
          Zaloguj
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginPage;
