## React Defer Image Component

Really simple image component that renders itself deferred.

## Install

```
npm install --save react-defer-image
```

## Usage

```
import React from "react";
import DeferImage from "react-defer-image";

return (
    <DeferImage
      src="image.png"
      emptySrc="spinner.gif"/>
);

```

## Props

### `src="String" [required]`

Url to image.

### `emptySrc="String" [optional]`

Url to image used to render when loading.


## Attributions

Thanks to [loktar00](https://github.com/loktar00) / [react-lazy-load](https://github.com/loktar00/react-lazy-load) for inspiration.
