import React from 'react';

const App = () => {
  const t = 0;
  const f = a => a + 2;
  const arr = [1, 2];
  const result = arr => arr.map((a, i) => <div key={`${i}`}>{a}</div>);

  return(
    result(arr)
  );
};

export default App;