import {View, Text} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';

export default function UploadDocument() {
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
      }

      const reference = storage().ref(data.assets[0].fileName);
      const pathToFile = data.assets[0].uri;
      const task = reference.putFile(pathToFile);

      task.on('state_changed', taskSnapshot => {
        setWait(
          `${taskSnapshot.bytesTransferred / 1024} / ${
            taskSnapshot.totalBytes / 1024
          }`,
        );
      });

      task.catch(err => {
        alert(err);
      });
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={async () => {
          launchPhotoLibrary();
        }}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
}
