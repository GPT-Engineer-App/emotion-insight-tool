import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={4} bg="teal.500">
      <Button as={Link} to="/" colorScheme="teal" variant="solid">
        Text Analysis
      </Button>
      <Button as={Link} to="/video" colorScheme="teal" variant="solid">
        Video Analysis
      </Button>
    </Box>
  );
};

export default NavBar;
