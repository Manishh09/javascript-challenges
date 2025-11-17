/**
 * Updates the input object by logging each key and the maximum value of its associated array.
 *
 * @param {Object} inpObj - The input object where each key is associated with an array of numbers.
 * @returns {Array} An array of key-value pairs from the input object.
 */
function update(inpObj) {
  //    for (const [k,v] of Object.entries(inpObj)) {

  //         console.log(k, ':' +  Math.max(...v));

  //    }

  const res = Object.entries(inpObj);

  return res.map((item) => {
    console.log(item[0], ":" + Math.max(...item[1]));
  });
}

update({
  a: [1, 5, 7],
  b: [1, 10, 99],
  c: [1, 88, 7],
});
