import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


import { _postApiFetch } from '../../services/Services';
import CustomIndicator from '../../components/CustomIndicator/CustomIndicator';

import { useSelector } from 'react-redux';

import useFetchData from '../../components/HOC/withGetData';


const Notification = (navigation) => {
    const apiUri = useSelector(state => state.api.domainName);

    const id = useSelector(state => state.user.userAllData.id);
    const com_id = useSelector(state => state.user.userAllData.com_id);

    let data = useFetchData(
        [['employee_id', id], ['com_id', com_id]],
        'notifications',
        'post',
        apiUri
    );

    const [documentData, setDocumentData] = useState([]);
    const [documentLoader, setDocumentLoader] = useState(false);

    useEffect(() => {
        try {
            data[1] !== documentLoader ? setDocumentLoader(data[1]) : null;
            data[0].length !== documentData.length ? setDocumentData(data[0]) : null;
        } catch (err) {
            console.log('Error in useEffect ', err);
        }
    }, [data, documentLoader, documentData]);

    return (



        <View style={styles.root}>
            {documentLoader &&
                <View style={styles.loader}>
                    <CustomIndicator />
                </View>
            }
            {documentData.map(data => (<View style={styles.container}>
                <Image source={{ uri: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-bell-education-smashingstocks-circular-smashing-stocks.png" }} style={styles.avatar} />
                <View style={styles.content}>
                    <View style={styles.text}>
                        <Text style={styles.name}>{data.notification_title}</Text>

                    </View>
                    <Text style={styles.notificationType}>{data.notification_type}</Text>
                    <Text style={styles.timeAgo}>
                        {data.notification_status}
                    </Text>
                    <Text style={styles.timeAgo}>
                        {data.created_at}
                    </Text>
                </View>
            </View>))}
        </View>

    );


}

export default Notification

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF"
    },
    loader: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start',
        height: "100%",
        top: "40%",

    },
    container: {
        padding: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: 'flex-start'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        flex: 1,
        marginLeft: 16,
        marginRight: 0
    },
    mainContent: {
        marginRight: 60
    },
    img: {
        height: 50,
        width: 50,
        margin: 0
    },
    attachment: {
        position: 'absolute',
        right: 0,
        height: 50,
        width: 50
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    timeAgo: {
        fontSize: 12,
        color: "#696969"
    },
    name: {
        fontSize: 16,
        color: "#1E90FF"
    },
    notificationType: {
        fontSize: 14,
        color: "#696969"
    },
});
