import * as React from 'react';
import CSS from 'csstype';
import Card from '../Card';

const styles: CSS.Properties = {
  display:'inline-block',
  position:'relative',
  width:'48%',
  height:'31%',
  marginTop:'5px',
  marginLeft:'5px',
  backgroundColor:'yellow'
}

export default class HandZone extends React.Component<{}, {}> {
  render() {
    return (
      <div style={styles}>
        <Card cardID='couragescreaming' cardColor='green' cardScore='1' useAnimated={true} />
      </div>
    );
  }
}
