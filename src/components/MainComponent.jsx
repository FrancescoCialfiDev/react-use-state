function MainComponent() {
    return (

        <main>
            <div className="container d-flex align-items-center h-100">
                <div className="content bg-white w-100">
                    <div className="title p-3">
                        <h1>Learn Web development</h1>
                    </div>
                    <div className="buttons">
                        <button type="button" className="btn btn-primary ">Primary</button>
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