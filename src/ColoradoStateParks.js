import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!
  wildlife()
  console.log(trees)

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;