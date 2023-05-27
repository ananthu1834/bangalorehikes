
import data from '../data/hikes.json';
import Box from './boxWithThumbnail';

function BoxList() {
  return (
    <div
        className='top-level-components'
        style={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: 0
        }}
    >
      {data.map((item) => (
            <Box key={item.id} hikeDetails={item}/>
      ))}
    </div>
  );
}

export default BoxList;
