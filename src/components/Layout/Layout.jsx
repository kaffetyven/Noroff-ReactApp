import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="[ container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              <nav class="[ header ]">
                <img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" alt="Rick and Morty" />
              </nav>
            </div>
          </div>
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}