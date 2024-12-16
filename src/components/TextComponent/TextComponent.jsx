function TextComponent({ array }) {

    const newArray = [...array]

    return (
        newArray.map((element) =>
            <>
                <h4>{element.title}</h4>
                <p>{element.description}</p>
            </>
        )
    )

}

export default TextComponent;