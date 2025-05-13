import React from 'react'

const MindMap = () => {
    return (
        <>
            <div className="card">
                <div className="mindmap">
                    <div className="node">
                        <div className="node-content">
                            <div className="node-title">Node 1</div>
                            <div className="node-description">Description 1</div>
                        </div>
                        <div className="node-children">
                            <div className="node">
                                <div className="node-content">
                                    <div className="node-title">Node 2</div>
                                    <div className="node-description">Description 2</div>
                                </div>
                                <div className="node-children">
                                    <div className="node">
                                        <div className="node-content">
                                            <div className="node-title">Node 3</div>
                                            <div className="node-description">Description 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MindMap