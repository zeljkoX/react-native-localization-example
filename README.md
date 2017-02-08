# React Native Localization demo

This demo use react-native-localization package to support localization and adds support dynamic language change by updating all views.

By default without using provided code in this project by changing language using react-native-localization language wouldn't change in whole app.

This example uses context to pass language strings. Aproach is similiar to react-redux.


### Example

Wrap your app with LanguageProvider 

```javascript
  <LanguageProvider 
      strings={strings}
      language="en">
      <App/>
  </LanguageProvider>
```

If your component contain text then you should wrap it with connect function to pass language props
```javascript

import { connect } from '@language';

export class Intro extends Component {
  render() {
    let { strings, language } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {strings.welcome}
        </Text>
        <Text style={styles.instructions}>
          {strings.change}
        </Text>
      </View>
    );
  }
}

export default connect(Intro);
```  
### Props
- strings: react-native-localization strings 
- language: used for setting language and reading current one
