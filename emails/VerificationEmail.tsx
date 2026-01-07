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
  email,
  otp,
}: VerificationEmailProps) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verify your email address</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>Complete your sign-up by verifying your email address</Preview>

      <Section style={{ backgroundColor: "#f3f6f9", padding: "40px 0" }}>
        <Section
          style={{
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: 8,
            padding: 28,
          }}
        >
          {/* Header */}
          <Row>
            <Heading
              as="h1"
              style={{ margin: 0, fontSize: 22, color: "#111827" }}
            >
              Verify your email address
            </Heading>
          </Row>

          {/* Greeting */}
          <Row>
            <Text
              style={{
                color: "#374151",
                fontSize: 14,
                marginTop: 12,
              }}
            >
              Hi {username},
            </Text>
          </Row>

          {/* Body */}
          <Row>
            <Text
              style={{
                color: "#374151",
                fontSize: 15,
                lineHeight: "22px",
                marginTop: 10,
              }}
            >
              Thanks for creating an account with us! To complete your
              registration and keep your account secure, please verify your
              email address using the code below.
            </Text>
          </Row>

          {/* OTP */}
          <Section
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 22,
            }}
          >
            <Text
              style={{
                backgroundColor: "#0f172a",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: 6,
                fontSize: 22,
                letterSpacing: "6px",
                fontWeight: 700,
              }}
            >
              {otp}
            </Text>
          </Section>

          {/* Expiry note */}
          <Row>
            <Text
              style={{
                color: "#374151",
                fontSize: 14,
                lineHeight: "22px",
                marginTop: 18,
              }}
            >
              <strong>Important:</strong> For security reasons, email
              verification must be completed within <strong>2 hours</strong> of
              registration.
            </Text>
          </Row>

          <Row>
            <Text
              style={{
                color: "#6b7280",
                fontSize: 14,
                lineHeight: "22px",
                marginTop: 6,
              }}
            >
              If your email address is not verified within this time, your
              account information will be automatically removed from our system.
              In such cases, the username you selected may become available to
              other users, and you will need to register again to create a new
              account.
            </Text>
          </Row>

          {/* CTA Button */}
          <Section
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <Button
              href={`${appUrl}/verify/${encodeURIComponent(username)}`}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                borderRadius: 6,
                padding: "12px 22px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Verify Email Address
            </Button>
          </Section>

          {/* Fallback link */}
          <Row>
            <Text
              style={{
                color: "#6b7280",
                fontSize: 13,
                marginTop: 20,
              }}
            >
              If the button above doesn’t work, copy and paste this link into
              your browser:
            </Text>
          </Row>

          <Row>
            <Text
              style={{
                wordBreak: "break-all",
                fontSize: 13,
                color: "#2563eb",
              }}
            >
              {appUrl}/verify/{username}
            </Text>
          </Row>

          {/* Security note */}
          <Row>
            <Text
              style={{
                color: "#9ca3af",
                fontSize: 13,
                marginTop: 22,
              }}
            >
              If you didn’t create an account using this email address, you can
              safely ignore this message. No further action is required.
            </Text>
          </Row>

          {/* Footer */}
          <Row>
            <Text
              style={{
                color: "#9ca3af",
                fontSize: 12,
                marginTop: 26,
                textAlign: "center",
              }}
            >
              © {new Date().getFullYear()} Your App Name. All rights reserved.
            </Text>
          </Row>
        </Section>
      </Section>
    </Html>
  );
}
