import styled from "@emotion/styled";

const Footer = styled.footer`
  padding: 10vh 0;
  background: ${(props) => props.theme.colors.primaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.muted};
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Copyright>©{new Date().getFullYear()} Giacomo Pasin</Copyright>
    </Footer>
  );
};

export default FooterComponent;
