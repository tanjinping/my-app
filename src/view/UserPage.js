import React, {Component} from "react";

import TabNavigator from "../components/TabNavigator";

class UserPage extends Component {

    click() {
    }

    render() {
        return (
            <div>
                <div>UserPage</div>
                <button onClick={this.click.bind(this)}>
                    关于我
                </button>
                <TabNavigator/>
            </div>
        )
    }
}

export default UserPage;
