import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  email: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const brand = {
    name: "GhostWire",
    primary: "#3b82f6",
    background: "#0b0f19",
    card: "#111827",
    text: "#e5e7eb",
    muted: "#9ca3af",
  };

  return (
    <Html lang="en">
      <Head>
        <title>Verify your email</title>

        {/* Helps email clients understand dark mode */}
        <meta name="color-scheme" content="dark light" />
        <meta name="supported-color-schemes" content="dark light" />

        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
        />
      </Head>

      <Preview>
        Welcome to {brand.name} — verify your email to continue
      </Preview>

      {/* Outer background */}
      <Section
        style={{
          backgroundColor: brand.background,
          padding: "48px 0",
        }}
      >
        {/* Card */}
        <Section
          style={{
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: brand.card,
            borderRadius: 10,
            padding: 32,
          }}
        >
          {/* Brand header */}
          <Row>
            <Heading
              as="h1"
              style={{
                margin: 0,
                fontSize: 22,
                color: brand.text,
              }}
            >
              {brand.name}
            </Heading>
          </Row>

          <Row>
            <Text
              style={{
                color: brand.muted,
                fontSize: 13,
                marginTop: 4,
              }}
            >
              Secure. Private. Anonymous.
            </Text>
          </Row>

          {/* Welcome */}
          <Row>
            <Text
              style={{
                color: brand.text,
                fontSize: 16,
                fontWeight: 600,
                marginTop: 20,
              }}
            >
              Welcome, {username}
            </Text>
          </Row>

          <Row>
            <Text
              style={{
                color: brand.text,
                fontSize: 14,
                lineHeight: "22px",
                marginTop: 8,
              }}
            >
              Thanks for signing up! To activate your account and start using
              {` ${brand.name}`}, please verify your email address.
            </Text>
          </Row>

          {/* OTP */}
          <Section
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 28,
            }}
          >
            <Text
              style={{
                backgroundColor: "#020617",
                color: "#ffffff",
                padding: "14px 26px",
                borderRadius: 8,
                fontSize: 22,
                letterSpacing: "6px",
                fontWeight: 700,
              }}
            >
              {otp}
            </Text>
          </Section>

          <Row>
            <Text
              style={{
                color: brand.muted,
                fontSize: 13,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Enter this code on the verification page.
            </Text>
          </Row>

          {/* Expiry & policy */}
          <Row>
            <Text
              style={{
                color: brand.text,
                fontSize: 14,
                marginTop: 22,
              }}
            >
              <strong>Important:</strong> Verification must be completed within{" "}
              <strong>2 hours</strong>.
            </Text>
          </Row>

          <Row>
            <Text
              style={{
                color: brand.muted,
                fontSize: 14,
                lineHeight: "22px",
                marginTop: 6,
              }}
            >
              Unverified accounts are automatically removed for security
              reasons. Your username may be released and you will need to
              register again if verification is not completed in time.
            </Text>
          </Row>

          {/* CTA */}
          <Section
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 28,
            }}
          >
            <Button
              href={`${appUrl}/verify/${encodeURIComponent(username)}`}
              style={{
                backgroundColor: brand.primary,
                color: "#ffffff",
                borderRadius: 8,
                padding: "12px 26px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Verify Email
            </Button>
          </Section>

          {/* Fallback */}
          <Row>
            <Text
              style={{
                color: brand.muted,
                fontSize: 13,
                marginTop: 22,
              }}
            >
              If the button doesn’t work, copy and paste this link:
            </Text>
          </Row>

          <Row>
            <Text
              style={{
                wordBreak: "break-all",
                fontSize: 13,
                color: brand.primary,
              }}
            >
              {appUrl}/verify/{username}
            </Text>
          </Row>

          {/* Footer */}
          <Row>
            <Text
              style={{
                color: brand.muted,
                fontSize: 12,
                marginTop: 30,
                textAlign: "center",
              }}
            >
              If you didn’t request this email, you can safely ignore it.
              <br />
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </Text>
          </Row>
        </Section>
      </Section>
    </Html>
  );
}
