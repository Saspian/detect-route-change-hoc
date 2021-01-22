import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

function HOC(props) {
  useEffect(() => {
    props.history.listen((location, action) => {
      console.log(location, "route changes");
    });
  }, [props]);
  return <>{props.children}</>;
}

export default withRouter(HOC);
