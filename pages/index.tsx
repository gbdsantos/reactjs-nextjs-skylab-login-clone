// import Head from 'next/head'

import {
  Button,
  Heading,
  Flex,
  Grid,
  Input,
  Link,
  Text
} from '@chakra-ui/core';

import Divider from '../components/Divider';

export default function Home() {
  return (
    <Grid
      as="main"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
    >
      <Flex
        alignItems="flex-start"
        flexDir="column"
        gridArea="logo"
      >
        <img src="/rocketseat.svg" alt="Rocketseat" />

        <Heading
          lineHeight="shorter"
          marginTop={16}
          size="2xl"
        >
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        backgroundColor="gray.700"
        borderRadius="md"
        gridArea="form"
        flexDir="column"
        alignItems="stretch"
        height="100%"
        padding={16}
      >
        <Input
          backgroundColor="gray.800"
          borderRadius="sm"
          focusBorderColor="purple.500"
          height="50px"
          placeholder="E-mail"
        />

        <Input
          backgroundColor="gray.800"
          borderRadius="sm"
          focusBorderColor="purple.500"
          height="50px"
          marginTop={2}
          placeholder="Senha"
        />

        <Link
          alignSelf="flex-start"
          color="purple.600"
          fontSize="sm"
          fontWeight="bold"
          marginTop={2}
          _hover={{ color: 'purple:500' }}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="purple.500"
          borderRadius="sm"
          height="50px"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          color="gray.300"
          fontSize="sm"
          marginTop={4}
          textAlign="center"
        >
          Não tem uma conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex
          alignItems="center"
        >
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            backgroundColor="gray.600"
            borderRadius="sm"
            flex="1"
            height="50px"
            marginLeft={6}
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </ Grid>
  )
}
