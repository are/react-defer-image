## React Defer Image Component

Really simple image component that renders deferred.

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
    <LazyLoad>
        <div>some content</div>
    </LazyLoad>;
)

```

## Props

### `src="String"`

This is used to set the elements height even when it contains no content.

```
<LazyLoad height='100px'>
    <div>some content</div>
</LazyLoad>;
```
