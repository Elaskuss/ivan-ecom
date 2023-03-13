import { ProfileNotLoggedIn, ProfileLoggedIn } from "./icon-profile.styles"

const ProfileIcon = ({loggedIn}) => {
   return (
      <>
         {loggedIn ? <ProfileLoggedIn></ProfileLoggedIn> : <ProfileNotLoggedIn></ProfileNotLoggedIn>}
      </>
         
   )
}

export default ProfileIcon