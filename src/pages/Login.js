import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";

const Component = observer(() => {
  const { AuthStore } = useStores();
  return (
    <>
      <h1>Login</h1>
    </>
  );
});

export default Component;
