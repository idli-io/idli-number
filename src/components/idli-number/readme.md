# idli-number



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                           | Type                    | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| `disabled`    | `disabled`    | If true, the user cannot interact with the button. Defaults to `false`.               | `boolean`               | `false`     |
| `inline`      | `inline`      | If true, the form will be in inline format. Defaults to `false`.                      | `boolean`               | `false`     |
| `label`       | `label`       | The input field label.                                                                | `string`                | `undefined` |
| `placeholder` | `placeholder` | The input field placeholder.                                                          | `string`                | `undefined` |
| `size`        | `size`        | The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.     | `"lg" \| "md" \| "sm"`  | `'md'`      |
| `value`       | `value`       | The input field value.                                                                | `number`                | `undefined` |
| `variant`     | `variant`     | Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`. | `"dashed" \| "default"` | `'default'` |


## Events

| Event         | Description                                                                                                                         | Type               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `inputChange` | On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
