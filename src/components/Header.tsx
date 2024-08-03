import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const StyledHeader = styled.header({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

const H1 = styled.h1({});

const Group = styled.div({
  display: "flex",
  gap: "1rem",
});

const StyledLink = styled(Link)<{ active: boolean }>(
  {},
  ({ theme }) => ({
    color: theme.color.text,
  }),
  ({ active }) =>
    active && {
      textDecoration: "none",
      fontWeight: "bold",
    }
);

export default function Header() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <StyledHeader>
      <H1>To-Do List</H1>
      <Group>
        <StyledLink to="/" active={pathname === "/"}>
          Task list
        </StyledLink>
        <StyledLink to="/new" active={pathname === "/new"}>
          Add task
        </StyledLink>
      </Group>
    </StyledHeader>
  );
}
