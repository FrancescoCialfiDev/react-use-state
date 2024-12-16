// import { useState } from "react";
function ButtonComponent({ array, activeLanguage, setActiveLanguage }) {
    // let [color, changecolor] = useState("btn-primary")
    const newArray = [...array]

    return (

        // Al click del bottono dobbiamo cambiare dinamicamente il colore:

        newArray.map((element) =>

            <button key={element.id} type="button" className={`btn ${activeLanguage.id === element.id ? 'btn-warning' : 'btn-primary'} mx-1`}
                onClick={() => setActiveLanguage(element)}>{element.title}</ button >

        )
    )

}

export default ButtonComponent;