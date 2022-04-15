import React, {Component} from "react";
import Layout from "../Components/Layout";
import OnionImage from "../Components/OnionImage";
import "./styles/Store.css";

//style="margin-left:25%"
//style="width:100%"
class Store extends Component {
    render() {
        return(
            <Layout>
                <div className="content-leftbar-store">
                    <OnionImage />

                    <div className="container-dashboard">
                        <h2>Sidebar Navigation Example</h2>
                        <p>The sidebar with is set with "style="width:25%".</p>
                        <p>The left margin of the page content is set to the same value.</p>
                    </div>

                </div>
            </Layout>
        );
    }
}

export default Store;