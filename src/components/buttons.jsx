import btn from "./btn";

function Buttons(props) {

  
  return (
    <main className="calc">
      {btn.map((btnItem, index) => (
        <button
          onClick={props.onclick}
          key={index}
          className={btnItem.class}
          value={btnItem.value}
        >
          {btnItem.value}
        </button>
      ))}
    </main>
  );
}

export default Buttons;
