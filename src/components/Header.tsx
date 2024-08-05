/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const StyledHeader = styled.header({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "1rem",
});

const Group = styled.div({
  display: "flex",
  gap: "1rem",
});

const StyledLink = styled(Link)<{ $active: boolean }>(
  {},
  ({ theme }) => ({
    color: theme.color.text,
  }),
  ({ $active }) =>
    $active && {
      textDecoration: "none",
      fontWeight: "bold",
    }
);

/** Site header which includes page navigation. */
export default function Header() {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <h1 css={{ margin: 0 }}>To-Do List</h1>
      <Group>
        <StyledLink to="/" $active={pathname === "/"}>
          Task list
        </StyledLink>
        <StyledLink to="/new" $active={pathname === "/new"}>
          Add task
        </StyledLink>
      </Group>
    </StyledHeader>
  );
}
