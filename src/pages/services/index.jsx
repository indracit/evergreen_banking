import React from "react";
import styled from "styled-components";

const ServicesWrapper = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  // background-color: #f5f7fa;
  color: #2c3e50;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #1a237e;
  margin-bottom: 30px;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #1565c0;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.4rem;
  color: #283593;
  margin-bottom: 10px;
`;

const ServiceText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const ServicesPage = () => {
  const services = [
    {
      icon: "💳",
      title: "Personal Banking",
      description:
        "Open savings accounts, manage your money, and access a range of personal banking services."
    },
    {
      icon: "🏦",
      title: "Business Loans",
      description:
        "Flexible loan solutions to support your business growth with competitive interest rates."
    },
    {
      icon: "📱",
      title: "Mobile Banking",
      description:
        "Manage your accounts, transfer funds, and pay bills securely from your smartphone."
    },
    {
      icon: "💹",
      title: "Investments",
      description:
        "Grow your wealth with our expert-guided investment and portfolio management services."
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Experience fast, safe, and encrypted online transactions for peace of mind."
    },
    {
      icon: "🌍",
      title: "International Transfers",
      description:
        "Send and receive money globally with competitive exchange rates and minimal fees."
    }
  ];

  return (
    <ServicesWrapper>
      <Container>
        <Title>Our Services</Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceText>{service.description}</ServiceText>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesWrapper>
  );
};

export default ServicesPage;