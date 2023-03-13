import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";

export const ProfileNotLoggedIn = styled(ProfileIcon)`
   width: 25px;
   height: 25px;
   stroke: black;
   fill: white;
   stroke-width: 1px;
`;

export const ProfileLoggedIn = styled(ProfileIcon)`
   width: 25px;
   height: 25px;
   stroke-width: 0.2px;
   stroke: black;
   stroke-linejoin: round;
   fill: black;
`