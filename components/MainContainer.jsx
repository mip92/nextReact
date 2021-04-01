import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords=''}) => {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="keywords" content={"next.js "+ keywords}></meta>
            </Head>
            <div className="navbar">
                <A href={'/'} text='Главная'/>
                <A href={'/users'} text='Пользователи'/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px
                  }
                `}
            </style>
        </div>
    );
};

export default MainContainer;