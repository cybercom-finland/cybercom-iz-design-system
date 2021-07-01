import { createGlobalStyle } from 'styled-components';
import SourceSansProWoffLatinItalic from'./source-sans-pro-v14-latin-italic.woff';
import SourceSansProWoffLatinRegular from'./source-sans-pro-v14-latin-regular.woff';
import SourceSansProWoff200 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff200Italic from './source-sans-pro-v14-latin-200italic.woff';
import SourceSansProWoff300 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff300Italic from './source-sans-pro-v14-latin-200italic.woff';
import SourceSansProWoff600 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff600Italic from './source-sans-pro-v14-latin-200italic.woff';
import SourceSansProWoff700 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff700Italic from './source-sans-pro-v14-latin-200italic.woff';
import SourceSansProWoff900 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff900Italic from './source-sans-pro-v14-latin-200italic.woff';
import SourceSansProWoff2LatinItalic from'./source-sans-pro-v14-latin-italic.woff2';
import SourceSansProWoff2LatinRegular from'./source-sans-pro-v14-latin-regular.woff2';
import SourceSansProWoff2200 from './source-sans-pro-v14-latin-200.woff2';
import SourceSansProWoff2200Italic from './source-sans-pro-v14-latin-200italic.woff2';
import SourceSansProWoff2300 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff2300Italic from './source-sans-pro-v14-latin-200italic.woff2';
import SourceSansProWoff2600 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff2600Italic from './source-sans-pro-v14-latin-200italic.woff2';
import SourceSansProWoff2700 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff2700Italic from './source-sans-pro-v14-latin-200italic.woff2';
import SourceSansProWoff2900 from './source-sans-pro-v14-latin-200.woff';
import SourceSansProWoff2900Italic from './source-sans-pro-v14-latin-200italic.woff2';

export default createGlobalStyle`
/* source-sans-pro-200 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url(${SourceSansProWoff2200}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff200}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-200italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 200;
  src: local(''),
       url(${SourceSansProWoff2200Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff200Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-300 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url(${SourceSansProWoff2300}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff300})) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-regular - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${SourceSansProWoff2LatinRegular}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoffLatinRegular}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-300italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 300;
  src: local(''),
       url(${SourceSansProWoff2300Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff300Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url(${SourceSansProWoff2LatinItalic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoffLatinItalic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-600 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url(${SourceSansProWoff2600}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff600}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-600italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 600;
  src: local(''),
       url(${SourceSansProWoff2600Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff600Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-700 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${SourceSansProWoff2700}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff700}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-700italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 700;
  src: local(''),
       url(${SourceSansProWoff2700Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff700Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-900 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url(${SourceSansProWoff2900}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff900}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-900italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 900;
  src: local(''),
       url(${SourceSansProWoff2900Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff900Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
body {
  font-family: 'Source Sans Pro', sans-serif;
}
`;