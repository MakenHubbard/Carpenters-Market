import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>
                <div>
                    <button type="button" class="btn btn-primary">Are you here to shop?</button>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Are you a Carpenter?</button>
                </div>
            </div>
        );
    }
}
