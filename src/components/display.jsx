import React from "react";
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

function Display(props) {
  return (
    <header>
      <div className="run">
        <div className="runtime">
          <input
            onChange={(e) => {
              const { value } = e.target;
              props.set(value);
            }}
            type="text"
            placeholder="Enter Values"
            value={props.value}
          />
        </div>
        <div className="result">{props.answer}</div>
      </div>
      <div className="display">
        <div className="left">
          <div><AccessTimeOutlinedIcon sx={{ fontSize: 17 }} /></div>
          <div><StraightenOutlinedIcon sx={{ fontSize: 17 }} /></div>
          <div><CalculateOutlinedIcon sx={{ fontSize: 17 }} /></div>
        </div>
        <div className="right"><BackspaceOutlinedIcon sx={{ fontSize: 16 }} /></div>
      </div>
    </header>
  );
}

Display.defaultProps = {
  answer: 0,
}

export default Display;
