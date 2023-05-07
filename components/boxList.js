
import data from '../data/hikes.json';
import Box from './boxWithThumbnail';

function BoxList() {
  return (
    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: 20,
            marginRight: 10
        }}
    >
      {data.map((item) => (
            <Box key={item.id} hikeDetails={item}/>
      ))}
    </div>
  );
}

export default BoxList;
