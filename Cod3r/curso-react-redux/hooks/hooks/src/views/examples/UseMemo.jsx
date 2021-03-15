import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

const sum = (a, b) => {
  const future = Date.now() + 2000;
  while(Date.now() < future) {}; // usado para criar um delay de 2s
  return a + b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  //const result = sum(n1, n2); // dessa forma todos os states levam 2s para atualizar, inclusive o n3

  // const [result, setResult] = useState(0);
  // useEffect(() => {
  //   setResult(sum(n1, n2))
  // }, [n1, n2]); dessa forma, n3 atualiza sem o delay de 2s

  const result = useMemo(() => sum(n1, n2), [n1, n2]); // usando o useMemo, substitui ter que criar um novo estado e usar o useEffect

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />

      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={e => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={e => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={e => setN3(parseInt(e.target.value))}
        />
        <span className="input">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
