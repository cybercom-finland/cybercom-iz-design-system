## Create a project using react and CRA

Using CRA is optional

###### `npx create-react-app ui-consumer-app`

## Install the ui library package into your project

###### `npm i cc-ui-components`

## Start your project

###### `npm start`

## Modify your public/index.html file to import the Source-Sans Pro font

```
<head>
...
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap" rel="stylesheet">
<style>
    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
</style>
...
</head>
```

## Import the Source-Sans Pro font from the NPM package

If you don't want to rely on a CDN to import your font, you can alternatively include the font into your project importing it from the NPM package in woff and woff2 formats from `cc-ui-components/dist/fonts` in the way that best suits your project.

```
source-sans-pro-v14-latin-italic.woff';
source-sans-pro-v14-latin-regular.woff';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff';
source-sans-pro-v14-latin-italic.woff2';
source-sans-pro-v14-latin-regular.woff2';
source-sans-pro-v14-latin-200.woff2';
source-sans-pro-v14-latin-200italic.woff2';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff2';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff2';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff2';
source-sans-pro-v14-latin-200.woff';
source-sans-pro-v14-latin-200italic.woff2';
```

## Modify your App.js file and remove auto generated styles from the generated project 

```
import { GlobalStyle } from "cc-ui-components/dist/shared/global";
import { Table } from "cc-ui-components";
import { paginationTableData } from "cc-ui-components/dist/components/data";
import { Icon } from "cc-ui-components";
import { SideMenu } from "cc-ui-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Icon icon="normal" aria-hidden />
      <Table data={paginationTableData} isSortable />
      <SideMenu />
    </div>
  );
}

export default App;
```

