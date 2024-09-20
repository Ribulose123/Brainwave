import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Geneerating from "./Geneerating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="BrainWave unlocks the pontential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative flex z-1 items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="smartest AI"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="mb-4 h4">Smartest AI</h4>
              <p className="mb-[3rem] body-2 text-n-3 ">
                BrainWave unlocks the pontential of AI-powered applications
              </p>

              <ul className="body-2 gap-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex py-4 items-start border-t border-n-6"
                  >
                    <img src={check} alt="check" width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Geneerating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10     rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  className="w-full h-full object-cover"
                  width={630}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className=" p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex justify-between items-center">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      /* className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.3 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`} */
                      className="flex items-center justify-center rounded-2xl w-10 h-10 bg-n-6 hover:bg-conic-gradient hover:w-[3rem] hover:h-[3rem] hover:p-0.2.5"
                    >
                      <div>
                        <img src={item} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20ren] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  alt="scary robot"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
