function Display(props) {
  return (
    <header>
        <div className="run">
          <div className="runtime">
            <input onChange={props.changed} type="text" placeholder="Enter Values" value={props.value}/>
          </div>
          <div className="result">{props.answer}</div>
        </div>
        <div className="display">
          <div className="left">
            <div>rime</div>
            <div>piano</div>
            <div>arith</div>
          </div>
          <div className="right">x</div>
        </div>
      </header>
  );
}

export default Display;