import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionButtions = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.action}>
                <TouchableOpacity style={styles.edit} onPress={props.onEdit}>
                    <Text style={styles.editText}>PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete} onPress={props.onDelete}>
                    <Text style={styles.deleteText}>CSV</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionButtions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    edit: {
        backgroundColor: '#0099FF',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        width: '30%',
        alignItems: 'center',
    },
    editText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    delete: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        width: '30%',
        alignItems: 'center',
    },
    deleteText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
})