import { useState } from "react";
function ButtonComponent({ array }) {
    let [color, changecolor] = useState("btn-primary")
    const newArray = [...array]

    return (

        // Al click del bottono dobbiamo cambiare dinamicamente il colore:

        newArray.map((element) =>
            <>
                < button key={element.id} type="button" className={`btn ${color} mx-1`} onClick={() => { changecolor("btn-warning") }}>{element.title}</ button >
            </>
        )
    )

}

export default ButtonComponent;