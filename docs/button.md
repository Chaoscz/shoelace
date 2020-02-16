Good ol' buttons. They're usually the first thing I look at when reviewing a component library. Shoelace offers a variation for every theme color.

```html preview
<sl-button type="default">Default</sl-button>
<sl-button type="primary">Primary</sl-button>
<sl-button type="success">Success</sl-button>
<sl-button type="info">Info</sl-button>
<sl-button type="warning">Warning</sl-button>
<sl-button type="danger">Danger</sl-button>
```

## Outline

Use the `outline` prop to give buttons an outlined effect.

```html preview
<sl-button type="default" outline>Default</sl-button>
<sl-button type="primary" outline>Primary</sl-button>
<sl-button type="success" outline>Success</sl-button>
<sl-button type="info" outline>Info</sl-button>
<sl-button type="warning" outline>Warning</sl-button>
<sl-button type="danger" outline>Danger</sl-button>
```

## Round

Use the `round` prop to give buttons rounded edges.

```html preview
<sl-button type="default" round>Default</sl-button>
<sl-button type="primary" round>Primary</sl-button>
<sl-button type="success" round>Success</sl-button>
<sl-button type="info" round>Info</sl-button>
<sl-button type="warning" round>Warning</sl-button>
<sl-button type="danger" round>Danger</sl-button>
```

## Sizes

Use the `size` prop to change a button's size.

```html preview
<sl-button size="small">Small</sl-button>
<sl-button size="medium">Medium</sl-button>
<sl-button size="large">Large</sl-button>

<sl-button size="small" round>Small</sl-button>
<sl-button size="medium" round>Medium</sl-button>
<sl-button size="large" round>Large</sl-button>
```

## Circle

Use the `circle` prop to create circular icon buttons.

```html preview
<sl-button type="default" size="small" circle><ion-icon name="settings-outline"></ion-icon></sl-button>
<sl-button type="default" size="medium" circle><ion-icon name="settings-outline"></ion-icon></sl-button>
<sl-button type="default" size="large" circle><ion-icon name="settings-outline"></ion-icon></sl-button>

<sl-button type="primary" size="small" circle><ion-icon name="search-outline"></ion-icon></sl-button>
<sl-button type="primary" size="medium" circle><ion-icon name="search-outline"></ion-icon></sl-button>
<sl-button type="primary" size="large" circle><ion-icon name="search-outline"></ion-icon></sl-button>
```

## Text

Use `type="text"` to create text buttons, which share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<sl-button type="text" size="small">Text</sl-button>
<sl-button type="text" size="medium">Text</sl-button>
<sl-button type="text" size="large">Text</sl-button>
```

## Block

Use the `block` prop to create a block-level button that spans 100% of its container's width.

```html preview
<sl-button type="default" block size="small">Default</sl-button>

<sl-button type="default" block size="medium">Primary</sl-button>

<sl-button type="default" block size="large">Primary</sl-button>
```

## Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<sl-button type="default">
  <ion-icon slot="prefix" name="arrow-back-outline"></ion-icon>
  Back
</sl-button>
<sl-button type="default">
  <ion-icon slot="suffix" name="arrow-forward-outline"></ion-icon>
  Next
</sl-button>
<sl-button type="default">
  <ion-icon slot="prefix" name="link-outline"></ion-icon>
  <ion-icon slot="suffix" name="open-outline"></ion-icon>
  Open
</sl-button>
```

## Caret

Use the `caret` prop to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<sl-button size="small" caret>Small</sl-button>
<sl-button size="medium" caret>Medium</sl-button>
<sl-button size="large" caret>Large</sl-button>
```

## Loading

Use the `loading` prop to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

```html preview
<sl-button type="default" loading>Default</sl-button>
<sl-button type="primary" loading>Primary</sl-button>
<sl-button type="success" loading>Success</sl-button>
<sl-button type="info" loading>Info</sl-button>
<sl-button type="warning" loading>Warning</sl-button>
<sl-button type="danger" loading>Danger</sl-button>
```

## Disabled

Use the `disabled` prop to disable a button.

```html preview
<sl-button type="default" disabled>Default</sl-button>
<sl-button type="primary" disabled>Primary</sl-button>
<sl-button type="success" disabled>Success</sl-button>
<sl-button type="info" disabled>Info</sl-button>
<sl-button type="warning" disabled>Warning</sl-button>
<sl-button type="danger" disabled>Danger</sl-button>
```

## Properties

| Property | Attribute | Description     | Type     | Default     |
| -------- | --------- | --------------- | -------- | ----------- |
| `first`  | `first`   | The first name  | `string` | `undefined` |
| `last`   | `last`    | The last name   | `string` | `undefined` |
| `middle` | `middle`  | The middle name | `string` | `undefined` |

## Methods

TODO

## Events

TODO

## Parts