import React from 'react'

export class NeutralLayout extends React.Component {
    render() {
        const Component = this.props.Component;

        return (
            <div id="dashboard-wrapper-neutral">
                <Component {...this.props} />
            </div>
        );
    }

}
export class PrivateLayout extends React.Component {
    render() {
        const Component = this.props.Component;

        return (
            <div id="dashboard-wrapper-private">
                <Component {...this.props} />
            </div>
        );
    }

}
export class PublicLayout extends React.Component {
    render() {
        const Component = this.props.Component;

        return (
            <div id="dashboard-wrapper-public">
                <Component {...this.props} />
            </div>
        );
    }

}