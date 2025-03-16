import { useState } from "react";
import { EXAMPLES } from "../data";
import { CORE_CONCEPTS } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

export function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
        console.log("Selected button:", selectedButton);
        setSelectedTopic(selectedButton);
    }
    return (
        <Section id="examples">
            <Tabs
                buttons={
                    <>
                        {CORE_CONCEPTS.map((concept) => (
                            <TabButton
                                isSelected={
                                    selectedTopic ===
                                    concept.title.toLowerCase()
                                }
                                onClick={() =>
                                    handleSelect(concept.title.toLowerCase())
                                }
                            >
                                {concept.title}
                            </TabButton>
                        ))}
                    </>
                }
            >
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
            </Tabs>
        </Section>
    );
}
