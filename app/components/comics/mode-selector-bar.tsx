import { Link } from "@remix-run/react";

export default function ModeSelectorBar({ mode }) {
  return (
    <div className="flex text-base mt- max-w-4xl  px-4 w-full pb-2 bg-teal- ">
      <h3 className="pr-4 py-0 ml-auto dmd:ml-0 ">Search by:</h3>
      <ul className=" flex gap-x-4 mr-auto ">
          <li className="">
            <Link
            // prefetch="render"
            to={`/results/meaning`}
              className={
                (mode === "meaning" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              {" "}
              Meaning<span className="text-x align-supe"></span>
            </Link>{" "}
          </li>
          <li>
            <Link
            // prefetch="render"
             to={`/results/date`}
              className={
                (mode === "date" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Date
            </Link>
          </li>
          <li>
            {" "}
            <Link
            // prefetch="render"
            to={`/results/character`}
              className={
                (mode === "character" && `text-purple-400 underline`) ||
                `hover:text-purple-400`
              }
            >
              Character
            </Link>
          </li>
        </ul>
    </div>
  );
}
