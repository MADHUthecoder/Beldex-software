import React, { useState } from "react";
import Tree from "react-d3-tree";
import orgChartJson from "../data/org-chart.json";
import { useCenteredTree } from "../helper/helpers";
import { FaPlus, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

const color = "#97B3B6"

const Popup = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <form className="flex flex-col justify-center items-center">
          <h2 className="font-primary text-[30px]">Add a New Member</h2>
          <label className="font-secondary font-semibold text-[20px]">
            Name:
            <input
              type="text"
              className="p-2 outline-none font-secondary text-[20px] w-[350px]"
              placeholder="Enter Name here"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="font-secondary font-semibold text-[20px]">
            Aarman ID:
            <input
              type="text"
              className="p-2 outline-none font-secondary text-[20px] w-[350px]"
              placeholder="Enter Aarman ID here"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="flex justify-center items-center">
          <button type="submit" className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl my-[10px] hover:bg-[#338de1]">Add</button>
      <button className="flex justify-center items-center h-[30px] w-[70px] font-bold bg-[#245f9bcf] shadow-inner text-white font-secondary rounded-xl ml-[20px] my-[10px] hover:bg-[#338de1]" onClick={onClose}>Save</button>
      </div>
      </form>
    </div>
  );
};

// // Here we're using `renderCustomNodeElement` to represent each node
// // as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  nodeX, // the x coordinate of the node
  nodeY, // the y coordinate of the node
  treeWidth, // the width of the tree
  togglePopup
 }) => {
  const halfTreeWidth = treeWidth / 2;
  const nodeCenterX = nodeX + halfTreeWidth;
  const nodeCenterY = nodeY + foreignObjectProps.height / 2;
  const hasChildren = nodeDatum.children && nodeDatum.children.length > 0;
 
  return (
     <g>
       <svg
       x="-125"
    xmlns="http://www.w3.org/2000/svg"
    width="250"
    height="54"
    style={{
      border: '2px solid black',
      borderRadius: '4px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease-in-out',
    }}
  >
    <rect
      width="100%"
      height="100%"
      fill={color}
      rx="4"
      // style={{ padding: '4px' }}
    />
    <foreignObject x="12" y="8" width="226" height="40">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaRegUserCircle size={40} style={{ marginRight: '8px' }} />
        <p style={{ fontSize: '1rem', fontFamily: 'sans-serif' }}>
          {nodeDatum.name}
        </p>
        {!hasChildren && (
              <button
                style={{
                  marginLeft: "auto",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => {
                  togglePopup();
                }}
              >
                <FaPlus size={20} />
              </button>
            )}
      </div>
    </foreignObject>
  </svg>
     </g>
  );
 };



 export default function Example() {
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 0, y: 0 };
  const foreignObjectProps = { width: 0, height: 0, x: 0 };
  const treeWidth = 0;
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
     <div style={containerStyles} ref={containerRef}>
       <Tree
         data={orgChartJson}
         dimensions={dimensions}
         translate={translate}
         renderCustomNodeElement={(rd3tProps) =>
           renderRectSvgNode({ ...rd3tProps, foreignObjectProps,nodeX: rd3tProps.nodeDatum.x,
            nodeY: rd3tProps.nodeDatum.y,
            treeWidth: treeWidth,togglePopup: togglePopup, })
         }
         orientation="vertical"
         separation={{ siblings: 2, nonSiblings: 2 }}
        
       />
       {showPopup && <Popup onClose={togglePopup} />}
     </div>
  );
 }
