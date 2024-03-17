import { useRef, useState } from "react";
import circle_icon from "./assets/circle.png";
import cross_icon from "./assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const Tictactoe = () => {
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const [lock, setLock] = useState(false);
  let [count, setCount] = useState(0);
  let titleRef = useRef(null);
  const toggle = (e, num) => {
    if (lock == true) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = ` <img src='${cross_icon}' alt="nothing" /> `;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = ` <img src='${circle_icon}' alt="nothing" /> `;
      data[num] = "o";
      setCount(++count);
    }
    checkwin();
  };
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations <img src='${cross_icon}' alt="nothing" /> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations <img src='${circle_icon}' alt="nothing" /> wins`;
    }
  };
  const reset = () => {
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "TicTacToe Game in <span> React</span>";
  };

  return (
    <div className=" text-center flex flex-col py-auto justify-center items-center h-screen">
      <h1
        className=" title text-white text-[35px] md:text-[60px]"
        ref={titleRef}
      >
        TicTacToe Game in <span> React</span>
      </h1>
      <div className="h-auto w-auto flex mt-[20px] gap-1">
        <div className="flex flex-col gap-1">
          <div
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
            className="boxes"
          ></div>
          <div
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
            className="boxes"
          ></div>
          <div
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
            className="boxes"
          ></div>
        </div>
        <div className="flex flex-col gap-1">
          <div
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
            className="boxes"
          ></div>
          <div
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
            className="boxes"
          ></div>
          <div
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
            className="boxes"
          ></div>
        </div>
        <div className="flex flex-col gap-1">
          <div
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
            className="boxes"
          ></div>
          <div
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
            className="boxes"
          ></div>
          <div
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
            className="boxes"
          ></div>
        </div>
      </div>
      <button
        onClick={() => {
          reset();
        }}
        className=" place-self-center mt-[20px] px-12 py-3 border-none text-[20px] font-semibold capitalize rounded-full text-[#26ffcb] bg-[#1f3540]"
      >
        reset
      </button>
    </div>
  );
};

export default Tictactoe;
