import React, { useState, useEffect, useRef } from "react";

interface MoveableElementProps {
  element: React.ReactElement;
  initialPosition: number;
}

const MoveableElement: React.FC<MoveableElementProps> = ({
  element,
  initialPosition,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);

  const handleMoveRight = () => {
    setPosition(position + 10);
  };

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.left = `${position}px`;
    }
  }, [position]);

  return (
    <div>
      <button onClick={handleMoveRight}>Move Right</button>
      <div ref={elementRef}>
        {element}
      </div>
    </div>
  );
};

export default MoveableElement;
