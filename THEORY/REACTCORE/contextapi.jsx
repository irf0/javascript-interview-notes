//EXAMPLE 
import { createContext, useContext } from "react";

//1.Context API utility - Create
const AuthContext = createContext(null)

//2.App.js - Provide
function App() {
    const user = {
        name: "Irfan"
    }
    return (
        <AuthContext.Provider>
            <Home />
        </AuthContext.Provider>
    )
}

//3. Home.js - Provide
function Home() {
    const { user } = useContext(AuthContext)

    return (
        <Text>{user?.name}</Text>
    )
}

//Context API lets component read shared data without prop drilling.
//Basic Flow,
//1. Create Context
//2. Provide Context
//3. Consume Context