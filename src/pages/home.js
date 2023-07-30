import Header from "../components/header"

const Home = function({pageName}){
    console.log(pageName)
    return(


        <>
        <Header pageName={pageName} />
        
        </>
    )
}

export default Home