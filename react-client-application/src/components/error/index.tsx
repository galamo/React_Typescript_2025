// function ErrorComponent() {
//   return <h1> Error </h1>;
// }

import { Component, ErrorInfo, ReactNode } from "react";

interface EBProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface EBState {
  isError: boolean;
}

export default class ErrorBoundary extends Component<EBProps, EBState> {
  public state: EBState;
  constructor(props: EBProps) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(): EBState {
    // send report to server
    return { isError: true };
  }

  render(): ReactNode {
    if (this.state.isError) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}

export function NiceErrorPage() {
  return (
    <div
      style={{
        background: "blue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1> Sorry Something went wrong we are working to fix it!</h1>
    </div>
  );
}
