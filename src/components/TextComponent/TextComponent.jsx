function TextComponent({ activeLanguage }) {

    // const newArray = [...array]

    return (
        // newArray.map((element) =>
        <>
            <h4>{activeLanguage.title}</h4>
            <p>{activeLanguage.description}</p>
        </>
        // )
    )

}

export default TextComponent;