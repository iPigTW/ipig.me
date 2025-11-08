import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Badge,
  Avatar,
  Title,
  MantineProvider,
  BackgroundImage,
  Overlay,
} from "@mantine/core";
import Head from "next/head";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
// Shared icon size for social buttons
const ICON_SIZE = 28;
export default function IndexPage() {
  return (
    <BackgroundImage
      src="/mygo.jpg"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Group justify="center" style={{ width: "100%" }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder opacity={0.9}>
          <Card.Section>
            <Avatar
              src="/ipig.png"
              alt="ipig"
              size={100}
              display="block"
              m="auto"
              mt={20}
            />
          </Card.Section>
          <Text fw={500} mt={10} style={{ textAlign: "center" }}>
            iPig
          </Text>
          <Text size="sm" c="dimmed">
            I'm a 14 years old programmer from Taiwan
          </Text>
          <Group mt="md" justify="center" gap="md" grow w="100%">
            <Button
              color="#7289da"
              radius="md"
              size="lg"
              component="a"
              href="https://discord.com/users/1113319860760494161"
            >
              <FaDiscord size={ICON_SIZE} />
            </Button>
            <Button
              color="black"
              radius="md"
              size="lg"
              component="a"
              href="https://github.com/ipigtw"
            >
              <FaGithub size={ICON_SIZE} />
            </Button>
            <Button
              color="red"
              radius="md"
              size="lg"
              component="a"
              href="https://youtube.com/@ipigtaiwan"
            >
              <FaYoutube size={ICON_SIZE} />
            </Button>
          </Group>
        </Card>
      </Group>
    </BackgroundImage>
  );
}
