function ButtonComponent({ array }) {

    const newArray = [...array]

    return (
        newArray.map((element) =>
            <>
                < button key={element.id} type="button" className="btn btn-primary m-1" >{element.title}</ button>
            </>
        )
    )



}

export default ButtonComponent;