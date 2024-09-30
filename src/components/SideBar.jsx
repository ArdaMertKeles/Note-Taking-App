import React, { useState } from "react";

export default function SideBar({subjectAlert, titleAlert, createNote, selectedTitle, selectedSubject, setSelectedTitle, setSelectedSubject, setSelectedColor, selectedWidthRange, setSelectedWidthRange, selectedHeightRange, setSelectedHeightRange}) {

    const colorPicker = (e) => {
        setSelectedColor(e.target.id)
    }
    const widthRangeFinder = (e) => {
        setSelectedWidthRange(e.target.value)
    }
    const heightRangeFinder = (e) => {
        setSelectedHeightRange(e.target.value)
    }
    const titleCatcher = (e) => {
        setSelectedTitle(e.target.value)
    }
    const subjectCatcher = (e) => {
        setSelectedSubject(e.target.value)
    }

    return (
        <div className="sideBarContainer">
            <div className="title">
                <h2>Create Your Note!</h2>
            </div>
            <div className="titleCreator">
                <input onChange={(e) => titleCatcher(e)} placeholder="Write your title here." value={selectedTitle} type="text" id="title" />
                <p className="alert" style={{display: titleAlert}}>You cant leave this field blank.</p>
                </div>
            <div className="subjectCreator">
                <textarea onChange={(e) => subjectCatcher(e)} value={selectedSubject} placeholder="Write your subject here." name="subject" className="subject" id="subject"></textarea>
                <p className="alert" style={{display: subjectAlert}}>You cant leave this field blank.</p>
            </div>
            <div className="ranges">
                <div className="widthRange">
                    <input type="range" min={50} max={250} value={selectedWidthRange} onChange={(e) => widthRangeFinder(e)} />
                    <p>Width: {selectedWidthRange} </p>
                </div>
                <div className="heightRange">
                    <input type="range" min={50} max={250} value={selectedHeightRange} onChange={(e) => heightRangeFinder(e)} />
                    <p>Height: {selectedHeightRange} </p>
                </div>
            </div>
            <div className="colorSelector">
                    <input type="radio" name="color" id="gold" />
                    <label htmlFor="gold">
                        <div onClick={(e) => colorPicker(e)} className="color" style={{background: `gold`}} id="gold"></div>
                    </label>
                    <input type="radio" name="color" id="blue" />
                    <label htmlFor="blue">
                        <div onClick={(e) => colorPicker(e)} className="color" id="blue" style={{background: `blue`}}></div>
                    </label><input type="radio" name="color" id="red" />
                    <label htmlFor="red">
                        <div onClick={(e) => colorPicker(e)} className="color" id="red" style={{background: `red`}}></div>
                    </label><input type="radio" name="color" id="green" />
                    <label htmlFor="green">
                        <div onClick={(e) => colorPicker(e)} className="color" id="green" style={{background: `green`}}></div>
                    </label><input type="radio" name="color" id="purple" />
                    <label htmlFor="purple">
                        <div onClick={(e) => colorPicker(e)} className="color" id="purple" style={{background: `purple`}}></div>
                    </label><input type="radio" name="color" id="pink" />
                    <label htmlFor="pink">
                        <div onClick={(e) => colorPicker(e)} className="color" id="pink" style={{background: `pink`}}></div>
                    </label><input type="radio" name="color" id="beige" />
                    <label htmlFor="beige">
                        <div onClick={(e) => colorPicker(e)} className="color" id="beige" style={{background: `beige`}}></div>
                    </label><input type="radio" name="color" id="lightcoral" />
                    <label htmlFor="lightcoral">
                        <div onClick={(e) => colorPicker(e)} className="color" id="lightcoral" style={{background: `lightcoral`}}></div>
                    </label><input type="radio" name="color" id="crimson" />
                    <label htmlFor="crimson">
                        <div onClick={(e) => colorPicker(e)} className="color" id="crimson" style={{background: `crimson`}}></div>
                    </label><input type="radio" name="color" id="aqua" />
                    <label htmlFor="aqua">
                        <div onClick={(e) => colorPicker(e)} className="color" id="aqua" style={{background: `aqua`}}></div>
                    </label><input type="radio" name="color" id="cyan" />
                    <label htmlFor="cyan">
                        <div onClick={(e) => colorPicker(e)} className="color" id="cyan" style={{background: `cyan`}}></div>
                    </label><input type="radio" name="color" id="darksalmon" />
                    <label htmlFor="darksalmon">
                        <div onClick={(e) => colorPicker(e)} className="color" id="darksalmon" style={{background: `darksalmon`}}></div>
                    </label><input type="radio" name="color" id="darkred" />
                    <label htmlFor="darkred">
                        <div onClick={(e) => colorPicker(e)} className="color" id="darkred" style={{background: `darkred`}}></div>
                    </label><input type="radio" name="color" id="darkgreen" />
                    <label htmlFor="darkgreen">
                        <div onClick={(e) => colorPicker(e)} className="color" id="darkgreen" style={{background: `darkgreen`}}></div>
                    </label><input type="radio" name="color" id="lightgreen" />
                    <label htmlFor="lightgreen">
                        <div onClick={(e) => colorPicker(e)} className="color" id="lightgreen" style={{background: `lightgreen`}}></div>
                    </label><input type="radio" name="color" id="gray" />
                    <label htmlFor="gray">
                        <div onClick={(e) => colorPicker(e)} className="color" id="gray" style={{background: `gray`}}></div>
                    </label><input type="radio" name="color" id="hotpink" />
                    <label htmlFor="hotpink">
                        <div onClick={(e) => colorPicker(e)} className="color" id="hotpink" style={{background: `hotpink`}}></div>
                    </label><input type="radio" name="color" id="indigo" />
                    <label htmlFor="indigo">
                        <div onClick={(e) => colorPicker(e)} className="color" id="indigo" style={{background: `indigo`}}></div>
                    </label><input type="radio" name="color" id="ivory" />
                    <label htmlFor="ivory">
                        <div onClick={(e) => colorPicker(e)} className="color" id="ivory" style={{background: `ivory`}}></div>
                    </label><input type="radio" name="color" id="lightskyblue" />
                    <label htmlFor="lightskyblue">
                        <div onClick={(e) => colorPicker(e)} className="color" id="lightskyblue" style={{background: `lightskyblue`}}></div>
                    </label><input type="radio" name="color" id="lime" />
                    <label htmlFor="lime">
                        <div onClick={(e) => colorPicker(e)} className="color" id="lime" style={{background: `lime`}}></div>
                    </label><input type="radio" name="color" id="limegreen" />
                    <label htmlFor="limegreen">
                        <div onClick={(e) => colorPicker(e)} className="color" id="limegreen" style={{background: `limegreen`}}></div>
                    </label><input type="radio" name="color" id="burlywood" />
                    <label htmlFor="burlywood">
                        <div onClick={(e) => colorPicker(e)} className="color" id="burlywood" style={{background: `burlywood`}}></div>
                    </label><input type="radio" name="color" id="brown" />
                    <label htmlFor="brown">
                        <div onClick={(e) => colorPicker(e)} className="color" id="brown" style={{background: `brown`}}></div>
                    </label>
            </div>
            <div className="createSection">
                <button onClick={createNote}>Create</button>
            </div>
        </div>
    )
}