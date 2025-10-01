import React from "react";

export default class DevErrorBoundary extends React.Component {
  constructor(p){ super(p); this.state = { err: null }; }
  static getDerivedStateFromError(err){ return { err }; }
  render() {
    if (this.state.err) {
      return (
        <pre style={{whiteSpace:"pre-wrap", color:"#ff6b6b", padding:24}}>
          🔥 Component crashed:
          {"\n"}{String(this.state.err?.stack || this.state.err)}
        </pre>
      );
    }
    return this.props.children;
  }
}
