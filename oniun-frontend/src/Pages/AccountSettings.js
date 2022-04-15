import React, {Component} from "react";
import Layout from "../Components/Layout";
import OnionImage from "../Components/OnionImage";
import TextDevelopment from "../Components/TextDevelopment";
import "./styles/AccountSettings.css";
// import "./styles/Store.css";
//style="margin-left:25%"
//style="width:100%"
class AccountSettings extends Component {
    render() {
        return(
            <Layout>
                <div className="content-leftbar-store">

                    <OnionImage />

                    <div className="container-dashboard center-block">
                        <TextDevelopment 
                            textDevelopment={"Lo sentimos esta vista de configuración se encuentra en proceso de desarrollo"}
                        />
                    </div>

                </div>
            </Layout>
        );
    }
}

export default AccountSettings;