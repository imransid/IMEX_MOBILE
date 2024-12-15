import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Box, Button, FormControl, Input, Stack, WarningOutlineIcon } from 'native-base'
import React, { Children } from 'react'

const ImmigrationModal = ({ children, onPress }) => {
    return (
        <View style={styles.modal}>
            <View style={styles.modalContent}>
                <View style={{ flex: 1, padding: 20 }}>
                    <View>
                        <Text style={styles.modalTitle}>Add Immigration</Text>
                    </View>
                    <View>
                        <Box alignItems="center">
                            <Box w="100%" maxWidth="300px">
                                <FormControl isRequired>
                                    <Stack mx="4">
                                        <FormControl.Label  >Password</FormControl.Label>
                                        <Input type="text" defaultValue="12345" placeholder="password" />


                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="text" defaultValue="12345" placeholder="password" />


                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="text" defaultValue="12345" placeholder="password" />


                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="text" defaultValue="12345" placeholder="password" />


                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="text" defaultValue="12345" placeholder="password" />


                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input type="text" defaultValue="12345" placeholder="password" />

                                    </Stack>
                                </FormControl>
                            </Box>
                        </Box>
                    </View>
                </View>


                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
                        <View style={styles.modalButton1}>
                            <Text style={styles.modalButtonText}>Add</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={onPress}>
                        <View style={styles.modalButton2}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ImmigrationModal

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
    modalButton1: {
        backgroundColor: '#0099FF',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 100,
        alignItems: "center",
        // flexDirection:"column-reverse"
    },
    modalButton2: {
        backgroundColor: '#FF0099',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 100,
        alignItems: "center",
        // flexDirection:"column-reverse"
    },
    modalButtonText: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "600",
    },

    cancelButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginHorizontal: 10,
        marginVertical: 10

    },
    actionButton: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: 30,
        marginVertical: 10


    },
    buttonGroup: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'absolute',
        bottom: 0,
        // padding: 10,
    }
})