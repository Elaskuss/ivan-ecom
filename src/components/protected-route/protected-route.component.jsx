import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { selectCurrentUser } from "../../store/user/user.selector";

const ProtectedRoute = ({children}) => {
    const user = useSelector(selectCurrentUser);

    if(!user) {
        return <Navigate to="/"/>
    }
 return children

};

export default ProtectedRoute;
