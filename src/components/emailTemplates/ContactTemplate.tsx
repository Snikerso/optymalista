import {
  Button,
  Container,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  senderName: string;
  message: string;
  senderEmail: string;
}

export const ContactTemplate = ({
  senderName,
  message,
  senderEmail,
}: Props) => (
  <Html>
    <Tailwind>
      <Container className="p-4 bg-gray-100 rounded-lg">
        <Heading className="text-2xl font-bold mb-4">Contact Message</Heading>
        <Text className="mb-2">
          <strong>Name:</strong> {senderName}
        </Text>
        <Text className="mb-4">
          <strong>Message:</strong> {message}
        </Text>
        <Button
          href={`mailto:${senderEmail}`}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Reply
        </Button>
      </Container>
    </Tailwind>
  </Html>
);
