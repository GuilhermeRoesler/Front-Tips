import React from 'react'

const EditableElement = () => {
    return (
        <>
            <h1>Editable Element</h1>
            <section id="EditableElement">
                <div>
                    <p contentEditable="true" spellCheck='false'>The "contenteditable" attribute in HTML is a feature that
                        allows users to edit the content directly within the browser. It enables users to interactively
                        modify
                        the content within that element. This attribute essentially turns the element into an editable area,
                        similar to a text editor or word processor.</p>
                </div>
            </section>
        </>
    )
}

export default EditableElement;