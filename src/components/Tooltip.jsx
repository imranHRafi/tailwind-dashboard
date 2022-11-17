import React, { useRef } from "react";

const Tooltip = ({ children, tooltip }) => {
  const tooltipRef = useRef();
  const container = useRef();

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX, screenY }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();
        tooltipRef.current.style.left = clientX - left + "px";
      }}
      className='group relative inline-block'
    >
      {children}
      <span
        ref={tooltipRef}
        className='invisible absolute bottom-full mb-2 scale-0 whitespace-nowrap rounded bg-blue-500 p-1 px-3 text-white transition group-hover:visible group-hover:scale-100'
      >
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
