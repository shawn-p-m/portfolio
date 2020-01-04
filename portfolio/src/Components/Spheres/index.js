import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Sphere from "./Sphere";

export default () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.0001;
  });

  const nodesSpheres = map(new Array(50), (el, i) => {
    return <Sphere key={i} />;
  });

  return <group ref={group}>{nodesSpheres}</group>;
};
