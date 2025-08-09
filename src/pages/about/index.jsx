import styled from "styled-components";

const AboutWrapper = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   background-color: #f5f7fa;
  color: #2c3e50;
  padding: 40px 20px;
  line-height: 1.6;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #1a237e;
  margin-bottom: 20px;
  border-bottom: 3px solid #3949ab;
  display: inline-block;
  padding-bottom: 5px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #283593;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  color: #1565c0;
  font-weight: bold;
`;

const AboutPage = () => {
  return (
    <AboutWrapper>
      <Container>
        <Title>About Us</Title>

        <Section>
          <Subtitle>Who We Are</Subtitle>
          <Text>
            At <Highlight>Evergreen Bank</Highlight>, we are committed to providing
            secure, innovative, and customer-focused financial solutions. With
            over 25 years in the banking industry, we combine traditional
            banking values with cutting-edge technology to serve our customers
            worldwide.
          </Text>
        </Section>

        <Section>
          <Subtitle>Our Mission</Subtitle>
          <Text>
            Our mission is to empower individuals and businesses to achieve
            financial freedom. We focus on delivering services that are{" "}
            <Highlight>transparent</Highlight>, <Highlight>reliable</Highlight>,
            and tailored to the unique needs of our customers.
          </Text>
        </Section>

        <Section>
          <Subtitle>Why Choose Us</Subtitle>
          <Text>
            - State-of-the-art security systems ensuring your money and data
            remain safe.
          </Text>
          <Text>
            - 24/7 customer support to assist you at every step.
          </Text>
          <Text>
            - A wide range of financial products from savings accounts to
            business loans.
          </Text>
        </Section>
      </Container>
    </AboutWrapper>
  );
};

export default AboutPage;