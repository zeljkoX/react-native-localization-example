/**
* Wrap component and pass props(strings, language)
* ```javascript
*   connect(SomeComponent);
* ```
*/

import  React, { Component, PropTypes } from 'react';

const connect = (ComponentToWrap) => {
  return class LanguageComponent extends Component {
    constructor(p,c){
      super(p,c);
      this.update = () => this.forceUpdate();
    }
    static contextTypes = {
      strings: PropTypes.object.isRequired,
      language: PropTypes.object.isRequired
    }
    
    componentDidMount():void {
    // subscribe to future theme changes
      this.subscribe();
    }
    componentWillUnmount():void {
      // unsubscribe to changes
      this.unsubscribe();
    }
    render():React.Element<any> {
      const { strings, language } = this.context;
      return (
        <ComponentToWrap {...this.props} strings={strings} language={language}/>
      );
    }
    subscribe = () => {
      this.context.language.subscribe(this.update);
    }
    unsubscribe = () => {
      this.context.language.unsubscribe(this.update);
    }
  };
};
export default connect;
