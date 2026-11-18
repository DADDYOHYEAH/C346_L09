import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

const datasource = [
  {
    data: [
      { key: 'a' },
      { key: 'e' },
      { key: 'i' },
      { key: 'o' },
    ],
    title: "Vowels",
    bgcolor: "skyblue",
  },
  {
    data: [
      { key: 'b' },
      { key: 'c' },
      { key: 'd' },
      { key: 'f' },
      { key: 'g' },
      { key: 'h' },
      { key: 'j' },
      { key: 'k' },
      { key: 'l' },
      { key: 'm' },
      { key: 'n' },
      { key: 'p' },
      { key: 'q' },
      { key: 'r' },
      { key: 's' },
    ],
    title: "Consonants",
    bgcolor: "khaki",
  }
];

export default function App() {
  const renderItem = ({ item, index, section }) => (
    <TouchableOpacity
      style={styles.opacityStyle}
      onPress={() => Alert.alert(section.title + ' ' + item.key + ' selected!')}
    >
      <Text style={styles.textStyle}>{index + 1}. {section.title} {item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Lesson 09 Exercise2</Text>
      <SectionList
        contentContainerStyle={{ padding: 10 }}
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title, bgcolor } }) => (
          <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>{title}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 30,
  },
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
