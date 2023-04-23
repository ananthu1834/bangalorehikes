
import data from '../data/hikes.json';
import Box from './boxWithThumbnail';

function BoxList() {
  return (
    <div className="flex flex-wrap ml-20">
      {data.map((item) => (
            <Box hikeDetails={item}/>
      ))}
    </div>
  );
}

export default BoxList;
