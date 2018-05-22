import React from "react";
import PropTypes from "prop-types";

const ChildComponent = React.forwardRef((props, ref) => {
    return (
        <div className="form-group" style={{padding: 20, border:'1px dashed #e0e0e0', height: 140, backgroundColor:'mediumseagreen'}}>
          <p>Children component</p>
          <input type="text" className={"form-control"} ref={ref}/>
        </div>
    );
});

ChildComponent.propTypes = {
   variable: PropTypes.string
};

export default ChildComponent;