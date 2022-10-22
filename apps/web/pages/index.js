import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import mexp from "math-expression-evaluator";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useHotKey from "../util/useHotKey";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

export default function Home() {
  const [expressions, setExpressions] = useState([]);
  const [parent] = useAutoAnimate({ duration: 130 });
  const inputRef = useRef(null);
  const dummy = useRef(null);
  const [keysPressed, setKeysPress] = useState(false);
  const [color, setColor] = useState("yellow");
  useHotKey(sequence, () => setKeysPress(true));

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [expressions]);

  useEffect(() => {
    if (keysPressed) {
      setColor("green");
    }
  }, [keysPressed]);

  console.log(color);

  // const handleChange = (e) => {
  //   console.log("aaa");
  //   e.preventDefault();

  //   try {
  //     const myExpressions = expressions;
  //     myExpressions.splice(-1, 1, {
  //       result: mexp.eval(e.target.value),
  //       expression: e.target.value,
  //     });
  //     console.log(myExpressions);
  //     setExpressions(myExpressions);
  //     inputRef.current.focus();
  //   } catch (error) {
  //     console.log(error);
  //     const myExpressions = expressions;
  //     myExpressions.splice(-1, 1, {
  //       result: "",
  //       expression: "",
  //     });
  //     setExpressions(myExpressions);
  //   }
  // };

  const handleExpression = (e) => {
    e.preventDefault();
    try {
      if (e.target.expression.value === "upupdowndownleftrightleftrightba") {
        setKeysPress(true);
        inputRef.current.value = "";
        return;
      }
      setExpressions([
        ...expressions,
        {
          result: mexp.eval(e.target.expression.value),
          expression: e.target.expression.value,
        },
      ]);
      inputRef.current.value = "";
      inputRef.current.focus();

      // inputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      setExpressions([
        ...expressions,
        { result: "Error", expression: e.target.expression.value },
      ]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="dark:bg-gray-900">
      <Head>
        <title>Novacalc</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6149850985266004"
          crossorigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center mt-6">
        <>
          {expressions.length == 0 ? (
            <p className="mt-64 opacity-40 select-none">
              Run an expression to see some results
            </p>
          ) : (
            <></>
          )}

          <div>
            <div className="dark:bg-gray-900">
              <div>
                <div ref={parent} className="px-16">
                  {expressions
                    // .slice(0)
                    // .reverse()
                    .map((expression) => (
                      <div
                        className="mt-4 border-b pb-4 dark:border-b-gray-700"
                        key={expression.expression}
                      >
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {expression.expression} =
                        </p>
                        <p className="text-lg text-gray-900 font-bold dark:text-white">
                          {expression.result}
                        </p>
                      </div>
                    ))}
                </div>
                <div ref={dummy} className="h-[9.5rem] md:h-[6.5rem]" />
              </div>
            </div>

            <footer
              className={`fixed bottom-0 left-0 w-full ${color}-400 pb-2 pt-1`}
            >
              {!keysPressed ? (
                <span className=" text-[1.1rem] select-none lowercase">
                  <i className="font-medium">nova</i>calc
                </span>
              ) : (
                <span className=" text-[1.1rem] select-none lowercase">
                  <i className="font-medium">supa</i>calc
                </span>
              )}

              <div>
                <a
                  href="/guide"
                  className="mr-3 text-xs underline cursor-pointer"
                >
                  guide
                </a>
                <a
                  href="https://github.com/cursecodes/nova-calculator"
                  target="_blank"
                  className="mr-3 text-xs underline cursor-pointer"
                >
                  source
                </a>
                <a
                  href="https://npmjs.com/package/@novacalc/cli"
                  target="_blank"
                  className="mr-3 text-xs underline cursor-pointer"
                >
                  cli
                </a>
                <a className="mr-3 text-xs underline cursor-pointer">mobile</a>
              </div>

              <form onSubmit={handleExpression} className={`${color}-400 mt-1`}>
                <input
                  // onChange={handleChange}
                  ref={inputRef}
                  className="focus:outline-none py-2 scroll-my-4 rounded-lg md:rounded-l-lg md:rounded-r-none px-1.5 bg-gray-100 w-[95%] sm:w-96 text-center md:text-left"
                  id="expression"
                  type="text"
                  placeholder="1+1, sin(45), 2*6/3^2"
                />
                <button
                  type="submit"
                  className={`mt-2 md:mt-0 rounded-lg md:rounded-r-lg md:rounded-l-none py-2 px-3 ${color}-600 w-[95%] sm:w-96 md:w-32 text-white`}
                >
                  evaluate<span className="ml-1">&#xBB;</span>
                </button>
              </form>
              <p className="mt-3 text-[0.6rem] text-gray-800 select-none">
                &copy; {new Date().getFullYear()} Novae
              </p>
            </footer>
          </div>
        </>
      </main>
    </div>
  );
}
