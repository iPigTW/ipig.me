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

export default function IndexPage() {
  return (
    <BackgroundImage
      src="/mygo.jpg"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Group justify="center" style={{ width: "100%" }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder opacity={0.8}>
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
            I'm a 13 years old programmer from Taiwan
          </Text>
          <Button
            color="#7289da"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href="https://discord.com/users/1113319860760494161"
          >
            My Discord
          </Button>
          <Button
            color="black"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href="https://github.com/ipigtw"
          >
            My GitHub
          </Button>
          <Button
            color="red"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href="https://youtube.com/@ipigtaiwan"
          >
            My YouTube
          </Button>
        </Card>
      </Group>
    </BackgroundImage>
  );
}
