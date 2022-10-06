/*
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
*/

const Footer = () => {
  return (
    <footer className={`py-[10vh] bg-black flex justify-center items-center`}>
      <p className="text-gray-300">©{new Date().getFullYear()} Giacomo Pasin</p>
    </footer>
  );
};

export default Footer;
