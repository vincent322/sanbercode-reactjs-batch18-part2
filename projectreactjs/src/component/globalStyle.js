import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  nav{
    background-color: ${({ theme }) => theme.navBar};
    height: 50px;
  }
  table.redTable tbody td {
    font-size: 13px;
    color: black;
  }
  table.redTable thead {
    background-color: ${({ theme }) => theme.thead};
  }
  table.redTable tr:nth-child(even) {
    background: ${({ theme }) => theme.td};
  }
  `