import React, { useState } from "react";

export default function Note({deleteNote, title, subject, width, height, color}) {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDragging(true);
        setOffset({
          x: e.clientX - position.x,
          y: e.clientY - position.y
        });
      };
    
      const handleMouseMove = (e) => {
        if (dragging) {
          setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y
          });
        }
      };
    
      const handleMouseUp = () => {
        setDragging(false);
      };

    return (
        <div style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            background: color,
            width: width,
            height: height
        }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp} className="note">
            <h2> {title} </h2>
            <p> {subject}. </p>
            <button onClick={deleteNote}>Delete</button>
        </div>
    )
}