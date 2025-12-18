import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={className}>
        <h2 className="logo-text">
          <span className="wrapper-animation nex">
            <span className="animated-gradient-text spanelement font-bold">
              Nex.
            </span>
          </span>
          <span className="wrapper-animation gen">
            <span className="animated-gradient-text spanelement font-bold">
              Gen.
            </span>
          </span>
          <span className="wrapper-animation soft">
            <span className="animated-gradient-text spanelement font-bold">
              Soft
            </span>
          </span>
        </h2>
      </div>
    </>
  );
};

export default Logo;
