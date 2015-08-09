declare module "react-redux" {
    import React = require("react");
    import redux = require("redux");

    interface ProviderProps {
        store: redux.Store;
        children?: Function;
        key?: string;
    }

    interface ProviderState {
        store: redux.Store;
    }

    class Provider extends React.Component<ProviderProps, ProviderState> {
      render(): any;
    }

    interface ConnectorProps {
        children: Function;
        select: Function;
    }

    class Connector extends React.Component<ConnectorProps, any> {}

    function connect(...args): Function;
}
