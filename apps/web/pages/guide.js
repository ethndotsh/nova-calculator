import Head from "next/head";
// import { Adsense } from "@ctrl/react-adsense";

export default function Guide() {
  return (
    <>
      <Head>
        <title>Novacalc - Guide</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6149850985266004"
          crossorigin="anonymous"
        ></script>
        <meta name="description" content="Guide to novacalc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <header className="px-16 py-4 mb-4 bg-yellow-400">
          <a href="/" className="group focus:underline">
            <span className="mr-1 group-hover:mr-[0.3rem] group-hover:ml-0.5 transition-all">
              &#xAB;
            </span>
            back
          </a>
          <h1 className="text-4xl select-none lowercase">
            <i className="font-medium">nova</i>calc
            <span className="uppercase text-2xl ml-1">guide</span>
          </h1>
        </header>

        <section className="px-16 grid grid-cols-6">
          <div>ad</div>
          <div className="col-span-4">
            <p className="mb-5">
              Learn how to use{" "}
              <span className="select-none">
                <i className="font-medium">nova</i>calc
              </span>{" "}
              like a professional.
              <span className="block text-xs opacity-50">
                Parentheses are not required for functions e.g. root4 is still
                valid
              </span>
            </p>
            <div className="overflow-x-auto relative">
              <table className="border w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Operator
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Description
                    </th>
                    {/* <th scope="col" className="py-3 px-6">
                    Example
                  </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>+</strong>
                    </td>
                    <td className="py-4 px-6">
                      Addition Operator eg. 2+3 results 5
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>-</strong>
                    </td>
                    <td className="py-4 px-6">
                      Subtraction Operator eg. 2-3 results -1
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>/</strong>
                    </td>
                    <td className="py-4 px-6">
                      Division operator eg. 3/2 results 1.5
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>*</strong>
                    </td>
                    <td className="py-4 px-6">
                      Multiplication Operator eg. 2*3 results 6
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>Mod</strong>
                    </td>
                    <td className="py-4 px-6">
                      Modulus Operator eg. 3 Mod 2 results 1
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>(</strong>
                    </td>
                    <td className="py-4 px-6">Opening Parenthesis</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>)</strong>
                    </td>
                    <td className="py-4 px-6">Closing Parenthesis</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>&amp;</strong>
                    </td>
                    <td className="py-4 px-6">
                      Bitwise AND eg. 3&amp;1 results 1
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>Sigma</strong>
                    </td>
                    <td className="py-4 px-6">
                      Summation eg. Sigma(1,100,n) results 5050
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>Pi</strong>
                    </td>
                    <td className="py-4 px-6">
                      Product eg. Pi(1,10,n) results 3628800
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>n</strong>
                    </td>
                    <td className="py-4 px-6">
                      Variable for Summation or Product
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>pi</strong>
                    </td>
                    <td className="py-4 px-6">Math constant pi returns 3.14</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>e</strong>
                    </td>
                    <td className="py-4 px-6">Math constant e returns 2.71</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>C</strong>
                    </td>
                    <td className="py-4 px-6">
                      Combination operator eg. 4C2 returns 6
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>P</strong>
                    </td>
                    <td className="py-4 px-6">
                      Permutation operator eg. 4P2 returns 12
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>!</strong>
                    </td>
                    <td className="py-4 px-6">
                      Factorial operator eg. 4! returns 24
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>log</strong>
                    </td>
                    <td className="py-4 px-6">
                      Logarithmic function with base 10 eg. log(1000) returns 3
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>ln</strong>
                    </td>
                    <td className="py-4 px-6">
                      Natural log function with base e eg. ln(2) returns .3010
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>pow</strong>
                    </td>
                    <td className="py-4 px-6">
                      Power function with two operator eg. pow(2,3) returns 8
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>^</strong>
                    </td>
                    <td className="py-4 px-6">
                      Power operator eg. 2^3 returns 8
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>root</strong>
                    </td>
                    <td className="py-4 px-6">
                      Square root function eg. root(4) returns 2
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>sin</strong>
                    </td>
                    <td className="py-4 px-6">Sine function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>cos</strong>
                    </td>
                    <td className="py-4 px-6">Cosine function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>tan</strong>
                    </td>
                    <td className="py-4 px-6">Tangent function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>asin</strong>
                    </td>
                    <td className="py-4 px-6">Inverse Sine function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>acos</strong>
                    </td>
                    <td className="py-4 px-6">Inverse Cosine function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>atan</strong>
                    </td>
                    <td className="py-4 px-6">Inverse Tangent function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>sinh</strong>
                    </td>
                    <td className="py-4 px-6">Hyperbolic Sine function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>cosh</strong>
                    </td>
                    <td className="py-4 px-6">Hyperbolic Cosine function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>tanh</strong>
                    </td>
                    <td className="py-4 px-6">Hyperbolic Tangent function</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>asinh</strong>
                    </td>
                    <td className="py-4 px-6">
                      Inverse Hyperbolic Sine function
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>acosh</strong>
                    </td>
                    <td className="py-4 px-6">
                      Inverse Hyperbolic Cosine function
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">
                      <strong>atanh</strong>
                    </td>
                    <td className="py-4 px-6">
                      Inverse Hyperbolic Tangent function
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>ad</div>
        </section>
        <footer className="text-center my-6 text-gray-700">
          <p>&copy; {new Date().getFullYear()} Novae</p>
        </footer>
      </main>
    </>
  );
}
