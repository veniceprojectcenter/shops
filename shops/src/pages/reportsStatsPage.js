import React from "react";
import 'react-widgets/dist/css/react-widgets.css';
import ShopsData from "../data/venice_shops.json";
import MapFilter from "../components/MapFilter";

class ReportsAndStatsPage extends React.Component {
    render() {
        return(
            <div>
                <h1>Reports and Stats Page</h1>
                {ShopsData.map(shops=>{
                    return <div>
                            <h3>{shops.year_collected} </h3>
                        </div>
                    }
                )}
            </div>
        );
    }
}
export default ReportsAndStatsPage;