


export const Header = ({text, handleText, checked, handleChecked, addText}) => {

    return (
        <div className="header">
            <input 
            type="text"
             value={text}
             onChange={(e) => handleText(e)}
            />


            <input
             type="checkbox"
            checked={checked}
            onChange={() => handleChecked()}
              />

              <input 
              type="button"
              value="Добавить"
              onClick={addText}
               />
        </div>
    )
}