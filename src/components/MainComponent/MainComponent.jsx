import ButtonComponent from "../ButtonsComponent/ButtonComponent";
import languages from "../../data/languages";

function MainComponent() {


    return (

        <main>
            <div className="container d-flex align-items-center h-100">
                <div className="content bg-white w-100">
                    <div className="title p-3">
                        <h1>Learn Web development</h1>
                    </div>
                    <div className="corpo">
                        <div className="buttons d-flex">
                            <ButtonComponent array={languages} />
                        </div>

                        <div className="mt-3 border rounded-2 p-4 ">
                            <h4>HTML</h4>
                            <p>HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>


    )
}

export default MainComponent;