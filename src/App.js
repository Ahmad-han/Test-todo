import { Header } from "./Header";
import { Content } from "./Content";
import { useState } from "react";



export const App = () => {
  const [text, setText] = useState("")

  const [leftColumn, setLeftcolumn] = useState([{
    text: "",
  }])

  const [rightColumn, setRightcolumn] = useState([{
    text: "",
  }])

  const [checked, setChecked] = useState(false)


  const handleText = (e) => {
    setText(e.target.value)
  }


  const handleChecked = () => {
    setChecked(!checked)
  }

  const addText = () => {
    if (checked === true) {
      setRightcolumn([{
        text: text
      },
      ...rightColumn
    ])
    } else {
      setLeftcolumn([{
        text: text
      },
      ...leftColumn
    ]
      )
    }

    setText("")
  }


  return (
    <div className="App">
      <Header text={text} handleText={handleText} checked={checked} handleChecked={handleChecked} addText={addText}/>
      <Content text={text} leftColumn={leftColumn} rightColumn={rightColumn} checked={checked}/>
    </div>
  );
}

