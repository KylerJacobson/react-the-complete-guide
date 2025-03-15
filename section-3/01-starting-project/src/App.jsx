import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
        console.log("Selected button:", selectedButton);
        setSelectedTopic(selectedButton);
    }
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept {...concept} key={concept.title} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>examples</h2>
                    <menu>
                        {CORE_CONCEPTS.map((concept) => (
                            <TabButton
                                isSelected={
                                    selectedTopic ===
                                    concept.title.toLowerCase()
                                }
                                onSelect={() =>
                                    handleSelect(concept.title.toLowerCase())
                                }
                            >
                                {concept.title}
                            </TabButton>
                        ))}
                    </menu>

                    {!selectedTopic ? (
                        <p>Please select a topic</p>
                    ) : (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
