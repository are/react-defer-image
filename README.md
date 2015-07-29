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

// In your render

return (
    <DeferImage
      src="image.png"/>
);

```

## Props

### `src="String" [required]`

Url to image.

### `emptySrc="String" [optional]`

Url to image used to render when loading.
