### Boolean



```javascript
function removeFalsy3(arr) {
  return arr.filter(a => Boolean(a));
}
```

Boolean itself is a function, and the arguments filter supplies are passed directly to it. This is the same as: