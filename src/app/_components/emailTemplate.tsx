import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const NewsletterEmail = () => (
  <Html>
    <Head />
    <Preview>Curiosities and novelties in the Resona store.</Preview>
    <Body style={main} className="text-black">
      <Container style={container}>
        <Img
          src="https://utfs.io/f/9a966468-3720-4c32-be99-0a1b0c12ae19-k5z6lm.png"
          width="220"
          height="100"
          alt="Logo Resona"
          style={logo}
        />
        <Text style={paragraph}>Hello,</Text>
        <Text style={paragraph}>
          Welcome to Resona, now every month you will receive the latest
          information about our items and news in the store.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://resona-opal.vercel.app/products">
            Products
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Resona team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          It's automatic e-mail from Resona newsletter. Do not reply!
        </Text>
      </Container>
    </Body>
  </Html>
);

export default NewsletterEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#2563eb",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const logo = {
  margin: "0 auto",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
