import React from "react";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="wrapper">
          <header>
            <h1>Eyehack</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>© {new Date().getFullYear()} Matthew Rapati</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
