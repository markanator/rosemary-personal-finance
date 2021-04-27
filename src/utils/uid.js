// code from https://gist.github.com/gordonbrander/2230317#gistcomment-3443509
function uid() {
  let intArray = new window.Uint32Array(3);

  window.crypto.getRandomValues(intArray);
  return (
    performance.now().toString(36) +
    Array.from(intArray)
      .map((A) => A.toString(36))
      .join('')
  ).replace(/\./g, '');
}

export default uid;
