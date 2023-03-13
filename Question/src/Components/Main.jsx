import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  const [toggle, settoggle] = useState("");

  useEffect(() => {
    let array = JSON.parse(localStorage.getItem("Main_Question")) || [];
    setData(array);
    console.log(array);
  }, []);

  const answer = (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      return;
    } else {
      const updateans = data.map((prevdata) => {
        //Condition check when toggle value is must be same for previous data id
        if (toggle === prevdata.id) {
          //Create variable
          let final;
          if (prevdata.answerList) {
            final = prevdata.answerList;
          } else {
            final = [];
          }
          if ([...final, e.target[0].value].length <= 5) {
            return { ...prevdata, answerList: [...final, e.target[0].value] };
          } else {
            return { ...prevdata, answerList: final };
          }
        } else {
          return prevdata;
        }
      });
      setData(updateans);
      localStorage.setItem("Main_Question", JSON.stringify(updateans));
    }
  };

  return (
    <>
      <h1> Question Paper</h1>
      {data.map((value) => {
        console.log(value.answerList, "value.answerList");
        return (
          <>
            <h4> {value.data}</h4> &nbsp;
            <ol>
              {value.answerList &&
                value.answerList.map((answer) => {
                  return <li>{answer}</li>;
                })}
            </ol>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => settoggle(value.id)}
            >
              Answer
            </button>
            {toggle === value.id && (
              <form onSubmit={answer}>
                <input

                // onChange={change}
                />
                <button
                // onClick={answer}
                >
                  Submit
                </button>
              </form>
            )}
          </>
        );
      })}
    </>
  );
};

export default Main;
