import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = bootstrapStyleSheet.create();
const c = bootstrapStyleSheet.constants;


export default class App extends React.Component {
  render() {
    let onPressLearnMore = function()
    {
    
    }
    return (
      <View style={[styles.container]}>

          {/* header */}
          <View style={[custom.header]}>
            <Text style={custom.headerText}>ABC App</Text>
        </View>
        {/* header */}

        <View style={s.row}>
          <View style={custom.colsm}>
        
          <Text style={custom.title}>Login</Text>
            <TextInput style={[s.formControl, s.textPrimary, s.my1]} placeholder="Email Address" type="email"/>
            <TextInput style={[s.formControl, s.textPrimary, s.my1]} placeholder="Password"/>
            {/* button */}
            <View style={[custom.full, s.my4]}>
              {/* to assume full width buttons are placed in parent elements */}
              <Button onPress={onPressLearnMore} title="Enter" accessibilityLabel="Learn more about this purple button" />
              {/* to assume full width buttons are placed in parent elements */}
            </View>
            {/* button */}
            </View>
        </View>
        {/* footer */}
        <View style={custom.footer}>
          <Text style={[custom.footerText]}>ABC &copy; 2018</Text>
        </View>
        {/* footer */}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display:'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
});

const custom = StyleSheet.create(
  {
    colsm: {
      marginTop:80,
      marginHorizontal: 50,
      flexDirection: 'column',
      display: 'flex',
      //alignItems: 'center',
    }
  ,
  btn:{
  
  },
  full:{
    width: '100%',
  },
  my1:{
    marginVertical: '10px'
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom:20,
  },
  header:{
    width: '100%',
    top:0,
    position: "absolute",
    padding: 10,
    backgroundColor: '#33b5e5',
  },
  footer:{
    width: '100%',
    bottom: 0,
    position: "absolute",
    padding: 10,
    backgroundColor: '#33b5e5',

  },
  footerText: {
    textAlign: "center",
    fontSize:20,
    textTransform: 'uppercase'
  },
  headerText: {
    textAlign: "center",
    fontSize:20,
    textTransform: 'uppercase'
  }
  }
)

