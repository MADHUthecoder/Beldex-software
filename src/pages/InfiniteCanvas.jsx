import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "../data/org-chart.json";
import { useCenteredTree } from "../helper/helpers";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

const color = "#97B3B6"



// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  nodeX, // the x coordinate of the node
  nodeY, // the y coordinate of the node
  treeWidth, // the width of the tree
 }) => {
  const halfTreeWidth = treeWidth / 2;
  const nodeCenterX = nodeX + halfTreeWidth;
  const nodeCenterY = nodeY + foreignObjectProps.height / 2;
 
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
      </div>
    </foreignObject>
  </svg>
     </g>
  );
 };

 export default function Example() {
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
  const treeWidth = nodeSize.x;
  return (
     <div style={containerStyles} ref={containerRef}>
       <Tree
         data={orgChartJson}
         dimensions={dimensions}
         translate={translate}
        //  renderCustomNodeElement={CustomNode}
         renderCustomNodeElement={(rd3tProps) =>
           renderRectSvgNode({ ...rd3tProps, foreignObjectProps,nodeX: rd3tProps.nodeDatum.x,
            nodeY: rd3tProps.nodeDatum.y,
            treeWidth: treeWidth, })
         }
         orientation="vertical"
       />
     </div>
  );
 }
