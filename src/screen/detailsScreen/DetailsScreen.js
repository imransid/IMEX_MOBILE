import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const DetailsScreen = ({ route, navigation }) => {
    const { title, description, date, department, announcedBy, prevRoute } = route.params;
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        Department: {department}
                    </Text>
                </View>

                <View style={styles.postContent}>
                    <Text style={styles.postTitle}>
                        {title}
                    </Text>

                    <Text style={styles.postDescription}>
                        {description}
                    </Text>



                    <Text style={styles.date}>
                        {date}
                    </Text>


                    <View style={styles.profile}>
                        <Text style={styles.tags}>
                            Announced By
                        </Text>
                        <Text style={styles.name}>
                            {announcedBy}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.shareButton} onPress={() => navigation.navigate(prevRoute)}>
                        <Text style={styles.shareButtonText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: "#00BFFF",
    },
    headerTitle: {
        fontSize: 30,
        color: "#FFFFFF",
        // marginTop: 10,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    postContent: {
        flex: 1,
        padding: 30,
    },
    postTitle: {
        fontSize: 26,
        fontWeight: '600',
    },
    postDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    tags: {
        color: '#00BFFF',
        marginTop: 10,
    },
    date: {
        color: '#696969',
        marginTop: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: "#00BFFF",
    },
    profile: {
        flexDirection: 'column',
        marginTop: 20
    },
    name: {
        fontSize: 22,
        color: "#00BFFF",
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: 10
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    }
});