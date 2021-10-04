import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


function CountUpAnimation({ className, ...rest }){
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return(
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
    {({ countUpRef }) => {
      return (
        <VisibilitySensor
          active={!viewPortEntered}
          onChange={isVisible => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
          delayedCall
        >
          <h3 className={className} ref={countUpRef}>1</h3>
        </VisibilitySensor>
      );
    }}
  </CountUp>
  );
}


export default CountUpAnimation;