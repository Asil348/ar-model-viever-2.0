import "./App.css";
import object from "./assets/object.gltf";
// import astronaut from './assets/Astronaut.glb'
// import poster from "./assets/poster.png";

function App() {
  return (
    <div className="App">
      <div className="view">
        <div className="viewer">
          <model-viewer
            bounds="tight"
            src={object}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            environment-image="neutral"
            shadow-intensity="1" /* poster={poster} */
          >
            <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
            </div>

            <div className="button">
              <button slot="ar-button" id="ar-button">
                View in your space
              </button>
            </div>
          </model-viewer>
        </div>
      </div>
    </div>
  );
}

export default App;
