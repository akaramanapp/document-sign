import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

import storage from '@react-native-firebase/storage';

export default function UploadDocument() {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(undefined)
  const launchPhotoLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, data => {
      if (data.didCancel) {
        return null;
      } else {
        setFile(data.assets[0])
        setFileName(data.assets[0].fileName);
      }
    });
  };

  const uploadFile = () => {
      const reference = storage().ref(file.fileName);
      const pathToFile = file.uri;
      const task = reference.putFile(pathToFile);

      task.on('state_changed', taskSnapshot => {
        if(taskSnapshot.state == 'success') {
          setFile('')
          setFileName(undefined)
        }
      });

      task.catch(err => {
        alert(err);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <Card>
        <Card.Title>DOCUMENT UPLOAD</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{height: 205}}
          source={require('../images/fileUpload.png')}
        />
        <Text style={{marginBottom: 10, textAlign: 'center'}}>
          {fileName && `Selected file: ${fileName.replace('.jpg', '')}`}
        </Text>
        <Button
          icon={
            <Icon name="link" color="#ffffff" size={20} style={{marginRight: 10}} />
          }
          buttonStyle={{
            margin: 10,
          }}
          title="Choose Document"
          onPress={launchPhotoLibrary}
        />
        <Button
          color={'success'}
          icon={
            <Icon name="upload" color="#ffffff" size={20} style={{marginRight: 10}} />
          }
          buttonStyle={{
            margin: 10,
          }}
          title="Upload File"
          onPress={uploadFile}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    flex: 1,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9575cd',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '80%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#c7a4ff',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  },
});
