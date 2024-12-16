import { useState } from "react";
import ButtonComponent from "../ButtonsComponent/ButtonComponent";
import languages from "../../data/languages";
import TextComponent from "../TextComponent/TextComponent";

function MainComponent() {

    const [activeLanguage, setActiveLanguage] = useState(languages[0])

    return (

        <main>
            <div className="container d-flex align-items-center h-100">
                <div className="content bg-white w-100">
                    <div className="title p-3">
                        <h1>Learn Web development</h1>
                    </div>
                    <div className="corpo">
                        <div className="buttons d-flex">
                            <ButtonComponent array={languages} activeLanguage={activeLanguage} setActiveLanguage={(language) => setActiveLanguage(language)} />
                        </div>

                        <div className="mt-3 border rounded-2 p-4 ">
                            <TextComponent activeLanguage={activeLanguage} />
                        </div>
                    </div>

                </div>
            </div>
        </main>


    )
}

export default MainComponent;