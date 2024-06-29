import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Counter() {
  const [Counteron, setCounteron] = useState(false);

  return (
    <ScrollTrigger className="flex flex-col md:flex-row h-1/5 justify-around" onEnter={() => setCounteron(true)}>
      {/* Counter 1 */}
      <div className="text-[#52505e] font-semibold flex flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="text-2xl md:text-4xl">
            {Counteron && <CountUp start={0} end={8} duration={10} delay={0} />}
          </h3>
        </div>
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl">YEARS OF SERVICE</h3>
        </div>
      </div>

      {/* Counter 2 */}
      <div className="text-[#52505e] font-semibold flex flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="text-2xl md:text-4xl">
            {Counteron && <CountUp start={0} end={320} duration={6} delay={0} />}
          </h3>
        </div>
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl">SQ. METER AREA</h3>
        </div>
      </div>

      {/* Counter 3 */}
      <div className="text-[#52505e] font-semibold flex flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="text-2xl md:text-4xl">
            {Counteron && <CountUp start={0} end={40} duration={6} delay={0} />}
          </h3>
        </div>
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl">NICE ROOMS</h3>
        </div>
      </div>

      {/* Counter 4 */}
      <div className="text-[#52505e] font-semibold flex flex-col justify-center">
        <div className="flex justify-center">
          <h3 className="text-2xl md:text-4xl">
            {Counteron && <CountUp start={0} end={4567} duration={4} delay={0} />}
          </h3>
        </div>
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl">HAPPY VISITORS</h3>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Counter;
