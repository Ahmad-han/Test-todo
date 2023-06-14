



export const Content = ({ text, leftColumn, rightColumn, checked}) => {

    return (
        <div className="content">
            <div className="list-one">
                <ul>
                  { leftColumn.map((item, index) => (
                    item.text === "" ? "" :  <li key={index}>{item.text}</li>
                  )) }
                </ul>
            </div>
            <div className="list-two">
                <ul>
                { rightColumn.map((item, index) => (
                    item.text === "" ? "" : <li key={index}>{item.text} <input type="checkbox" checked={checked} /></li>
                )) }
                </ul>
            </div>
        </div>
    )
}