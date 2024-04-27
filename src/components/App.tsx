import './App.css';
import RecordingItem from "./Recording";
import recorderService from "../lib/record-service";
import {useState} from "react";

type Recording = {
  blob: Blob;
  url: string;
}

function App() {
  let [isRecording, setIsRecording] = useState(false);
  let [count, setCount] = useState(1);
  let [recordings, setRecordings]: [Recording[], any] = useState([]);
  let record = () => {
    setIsRecording(true);
    recorderService.record().then(blob => {
      recordings.push({
        blob: blob,
        url: URL.createObjectURL(blob),
      });
      setRecordings(recordings)
      setCount(count + 1)
    });
  }
  let stop = () => {
    setIsRecording(false);
    recorderService.stop();
  }

  return (
    <div className="App">
      <h3>
        Recordings
      </h3>
      <section>
        {
          recordings.map((rec, index) => {
            return (
              <RecordingItem index={index} url={rec.url}></RecordingItem>
            );
          })
        }
      </section>
      <footer>
        {
          isRecording ?
            <button className="btn-record"
                    onClick={stop}>
              Stop
            </button>
            :
            <button className="btn-record"
                    onClick={record}
                    disabled={!recorderService.isSupported()}>
              Record
            </button>
        }
      </footer>
    </div>
  );
}

export default App;
