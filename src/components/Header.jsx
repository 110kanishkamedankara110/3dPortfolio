import React, { useRef } from "react";
import { gsap } from "gsap";

const Header = (props) => {
  const svgRef = useRef();
  const home = useRef();
  const pathRef = useRef();

  const handleMouseEnter = () => {
    gsap.to(home.current, {
      y: 10,
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(home.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
    });
  };

  const handleClick = () => {
    const tl = gsap.timeline({
      ease: "power2.out",
      duration: 0.5,
    });

    tl.to(
      svgRef.current,
      {
        scale: 2,
        duration: 0.5,
      },
      0
    ).to(
      svgRef.current,
      {
        scale: 1,
      },
      0.2
    );

    props.onHomeCLick();

    return () => {
      tl.kill();
    };
  };

  return (
    <nav className="w-full flex p-2 align-middle fixed z-50">
      <div className="w-full flex justify-center">
        <div
          ref={home}
          className="p-3rounded-full cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding:10,
            borderRadius:10,
            fontSize:20,
            color:'white'
          }}
        >
          _Home
          {/* <svg
            ref={svgRef}
            baseProfile="tiny"
            height="24px"
            id="Layer_1"
            version="1.2"
            viewBox="0 0 24 24"
            width="24px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              ref={pathRef}
              d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768C18.184,8.34,12,3,12,3z"
            />
          </svg> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
