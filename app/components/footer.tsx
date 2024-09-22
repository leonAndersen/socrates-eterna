import { Link, useSearchParams, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";


export default function Footer() {
  const location = useLocation() 

  const [isSnapEnabled, setIsSnapEnabled] = useState(false);

  useEffect(() => {
    
    if (location.pathname === "/about" || location.hash === "#about-top") {
      setIsSnapEnabled(true);
    } else {
      setIsSnapEnabled(false);
    }
  }, [location.pathname]);


  // console.log(location.hash)
  return (
    <footer className={`  mt-aut bg-dilred items-center flex  w-full ${isSnapEnabled && "snap-start snap-always"} `}>
      <nav className="max-w-3xl flex flex-col flex-gro items-center px-4 text-neutral-100 text-xs tiny:text-sm mx-auto font-light w-full">
        <div className="flex gap-x-3 dmd:gap-x-4 pt-6 pb-3">
          <Link
            className="hover:underline"
            to="https://www.x.com/ScottAdamsSays"
                target="_blank"
                rel="noopener norefferrer"
          >
            X.com
          </Link>
          <Link
            className="hover:underline"
            to="https://www.instagram.com/ScottAdams925"
                target="_blank"
                rel="noopener norefferrer"
          >
            Instagram
          </Link>
          <Link
            className="hover:underline"
            to="https://www.linkedin.com/in/scott-adams-52b1595a/"
                target="_blank"
                rel="noopener norefferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:underline"
            to="https://scottadams.locals.com"
                target="_blank"
                rel="noopener norefferrer"
          >
            Locals.com
          </Link>
          <Link
            className="hover:underline"
            to="https://www.youtube.com/RealCoffeeWithScottAdams"
                target="_blank"
                rel="noopener norefferrer"
          >
            Youtube
          </Link>
        </div>
        <div className="flex gap-3 text-center  sm:flex-row flex-col items-center mx-auto mb-6  ">
          <Link
            className="hover:decoration-solid underline decoration-dotted "
            to="/licensing"
          >
            {" "}
            Licensing & Advertisement{" "}
          </Link>
          <div className=""> © 2024 Dilbert.com - All Rights Reserved.</div>
        </div>
      </nav>
    </footer>
  );
}
