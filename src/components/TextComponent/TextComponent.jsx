function TextComponent({ activeLanguage }) {

    // const newArray = [...array]

    return (
        // newArray.map((element) =>
        <>
            <h4>{activeLanguage.title ? activeLanguage.title : "Nessun Titolo"}</h4>
            <p>{activeLanguage.description ? activeLanguage.description : "Non è stato selezionatio nessun tipo di linguaggio"}</p>
        </>
        // )
    )

}

export default TextComponent;