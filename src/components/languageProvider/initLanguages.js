/**
 * Pass language object to react-native-localization package
 * ```javascript
 * initLanguages({en: {}, de: {}});
 * ```
 * @flow
 */
import LocalizedStrings from 'react-native-localization';

export default function initLanguages(languages = {}):Object{
    return new LocalizedStrings(languages);
}
