import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Children } from 'react'

const CustomModal = ({ children, onPress }) => {
    return (
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Emergency Contacts</Text>
                <Text style={styles.modalText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text style={styles.modalText}>

                </Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Cancel</Text>
                </View>
                {/* {children} */}
            </TouchableOpacity>
        </View>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        height: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#151515',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 15,
        color: "#151515",
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#0099FF',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    modalButtonText: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "600",
    },
})