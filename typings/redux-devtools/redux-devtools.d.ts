declare module ReduxDevTools {
  function devTools(): Function;
  function persistState(sessionId: any): Function;
}

declare module "redux-devtools" {
  export = ReduxDevTools;
}

declare module "redux-devtools/lib/react" {
  import React = require("react");
  import redux = require("redux");

  interface DebugPanelProps {
      children?: Function;
      key?: string;
      top?: boolean;
      right?: boolean;
      bottom?: boolean;
  }

  interface DebugPanelState { }

  class DebugPanel extends React.Component<DebugPanelProps, DebugPanelState> {
    render(): any;
  }

  interface DevToolsProps {
      children?: Function;
      key?: string;
      store?: any;
      monitor?: any;
  }

  interface DevToolsState { }

  class DevTools extends React.Component<DevToolsProps, DevToolsState> {
    render(): any;
  }

  export function LogMonitor(): Function;
}
