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

This is used to set the elements height even when it contains no content.

```
<LazyLoad height='100px'>
    <div>some content</div>
</LazyLoad>;
```
