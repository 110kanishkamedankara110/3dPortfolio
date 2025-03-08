import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Top from "./Top";
import TopRocket from "./TopRocket";
import Cloud from "../models/Cloud";
import Text from "./Text";
import ConsoleContactForm from "./ConsoleCOntactForm";
import { Blob } from "react-interactive-blob";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Skeleton from "../models/Skeleton";
import MushRoom from "./MushRoom";
import { rotate } from "three/webgpu";

const Page = forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const pages = useRef();
  const homeSection = useRef();
  const projects = useRef();
  const rocketSection = useRef();
  const endSection = useRef();

  const contentRef = useRef(null);
  const textRef = useRef(null);
  const mushRoomRef = useRef(null);

  useEffect(() => {
    const children = pages.current.children;

    const animactionss = [];

    gsap.utils.toArray(children).forEach((child, index) => {
      const direction = Math.pow(-1, index);
      const startX = 50 * direction;

      const animactions = gsap.fromTo(
        child,
        { x: 0 + "%", opacity: 1 },
        {
          x: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: child,
            start: "top 90%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      animactionss.push(animactions);
    });

    const ctx = gsap.context(() => {
      gsap.from(homeSection.current, {
        opacity: 0,
        // y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out",
      });
    });

    return () => {
      animactionss.forEach((animactions) => {
        animactions.kill();
      });
      ctx.revert();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getHome: () => homeSection.current,
    getProject: () => projects.current,
  }));

  return (
    <div
      ref={pages}
      className=" box-border flex flex-col align-middle z-40"
      id="main"
    >
      <section
        id="home"
        ref={homeSection}
        className="w-screen p-5 box-border flex justify-center items-center"
        style={{
          minHeight: "100vh",
          maxHeight:'fit-content'
        }}
      >
        <div
          ref={contentRef}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            height: "fit-content",
            minWidth: "fit-content",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          className="lg:w-1/2 rounded-3xl shadow-lg p-6 md:flex md:items-center"
        >
          <div
            className="md:w-1/3"
            style={{
              height: 500,
            }}
          >
            <Canvas>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={1} />
              <hemisphereLight
                groundColor="#000000"
                color="#FFFFFF"
                intensity={1}
              />
              <OrbitControls />
              <MushRoom
                scale={[1.3, 1.3, 1.3]}
                position={[0.2, -2, 0]}
                rotation={[0, -(Math.PI / 3), 0]}
              />
            </Canvas>
          </div>
          <div ref={textRef} className="md:w-2/3 md:ml-6 ">
            <img
              width={200}
              src="/Fsdev.png"
              style={{
                position: "absolute",
                right: 0,
                top: -100,
                transform: "rotate(15deg)",
              }}
            />
            <img
              width={200}
              src="/st.png"
              style={{
                position: "absolute",
                right: 0,
                top: 100,
              }}
            />
            <p className="text-white">Hi , I am</p>
            <h2 className="text-6xl font-semibold mb-2 text-white">KANISHKA</h2>
            <h2 className="text-6xl font-semibold mb-2 text-white">
              MEDANKARA
            </h2>

            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              &#x276F; Fullstack Developer
            </h2>
            <br />
            <div className="flex gap-1 flex-col" style={{ fontSize: 18 }}>
              <p className="text-gray-400">// my number</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">contact </span> =
                "+94705715007";
              </p>

              <p className="text-gray-400">// whatsapp number</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">whatsapp </span> =
                "+94759058519";
              </p>

              <p className="text-gray-400">// my e-mail</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">email </span> =
                "110kqnishkamedankara110@gmail.com";
              </p>

              <p className="text-gray-400">// check out my projects on,</p>
              <p className="text-white">
                <span className="text-pink-400">String </span>
                <span className="text-green-300">github </span> =
                <a href="https://github.com/110kanishkamedankara110">
                  "https://github.com/110kanishkamedankara110"
                </a>
                ;
              </p>

              <p className="text-gray-400">// languages</p>
              <p className="text-white">
                <span className="text-pink-400">String [ ] </span>
                <span className="text-green-300">languages </span> =
                &#x2774;&nbsp;{" "}
                <span className="text-yellow-300">
                  "java"&nbsp;,&nbsp;"javaScript"&nbsp;,&nbsp;"python"
                </span>
                &nbsp; &#x2775;;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ transform: "translateX(-100%)",height:'fit-content' }}
        className="sec p-5 box-border flex flex-col "
      >
        <div
          className="w-full flex flex-wrap justify-center flex-row"
          ref={projects}
          style={{}}
        >
          <img width={200} src="/ai.png" />
          <img width={200} src="/css.png" />
          <img width={200} src="/dev.png" />
          <img width={200} src="/do.png" />
          <img width={200} src="/Fsdev.png" />
          <img width={200} src="/git.png" />

          <img width={200} src="/html.png" />
          <img width={200} src="/int.png" />
          <img width={200} src="/java.png" />
          <img width={200} src="/node.png" />
          <img width={200} src="/php.png" />
          <img width={200} src="/py.png" />
          <img width={200} src="/term.png" />
          <img width={200} src="/vs.png" />
          <img width={200} src="/arduno.png" />
          <img width={200} src="/bs.png" />
          <img width={200} src="/fb.png" />
          <img width={200} src="/js.png" />
          <img width={200} src="/npm.png" />
          <img width={200} src="/react.png" />

        </div>
      </section>

      <section
        style={{
          // backgroundColor: "rgb(211 255 130)",
          transform: "translateX(-100%)",
          height: "fit-content",
        }}
        className="sec p-5 h-screen box-border flex flex-col justify-center"
        ref={rocketSection}
      >
        <Text>Java</Text>
        <Text>Python</Text>
        <Text>JavaScript</Text>
        <div className="w-full h-full box"></div>
      </section>

      <section
        style={{ transform: "translateX(-100%)" }}
        className="sec h-screen box-border flex flex-col justify-center"
        ref={endSection}
      >
        <div className="h-full w-full box">
          <ConsoleContactForm />
        </div>
      </section>

      <Top
        className="lg:w-10/12"
        pages={pages}
        projects={projects}
        home={homeSection}
      />
      <TopRocket end={endSection} rocket={rocketSection} />
      <Cloud rocket={rocketSection} />
    </div>
  );
});

export default Page;
