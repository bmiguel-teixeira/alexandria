import './App.css';
import React, { useState } from "react"
import { ReactReader } from "react-reader"


function App() {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url="http://192.168.1.97:1323/asd.epub"
      />
    </div>
  );
}

export default App;
