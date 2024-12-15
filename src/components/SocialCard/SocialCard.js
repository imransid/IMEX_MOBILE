import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSocial } from '../../actions/Social.action'
const SocialCard = () => {
  const dispatch = useDispatch()
  const socialData = useSelector(state => state.social.socialData)
  const socialLoading = useSelector(state => state.social.socialLoading)

  console.log("first", socialData)
  useEffect(() => {
    dispatch(getSocial(6))
  }, [socialLoading])

  const handleLinks = (link) => {
    console.log("link hits", link)

    try {
      Linking.openURL(link).catch(err => alert("Not a valid link"));
    } catch (error) {
      console.log(error)
    }
  }

  const callNumber = () => {
    Linking.openURL(`tel:${socialData.phone}`).catch(err => alert("Not a valid Number"));
  }



  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>No Social</Text> */}

      {!socialLoading && socialData?.map(data => (
        <View style={styles.contentList}>
          <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
            <Image style={styles.image} source={{ uri: 'https://img.icons8.com/color/240/000000/facebook-new.png' }} />
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.name}>Facebook</Text>
                <Text style={styles.count}>{data.social_profile_fb_profile ? "Facebook Added" : "No facebook profile"}</Text>

              </View>
              <TouchableOpacity style={styles.followButton} onPress={() => handleLinks(data.social_profile_fb_profile)}>
                <Text style={styles.followButtonText}>Open Link</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
            <Image style={styles.image} source={{ uri: "https://img.icons8.com/fluency/240/000000/linkedin-circled.png" }} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Linkedin</Text>
              <Text style={styles.count}>{data.social_profile_linkedin_profile ? "LinkedIn Profile Added" : "No LinkedIn profile"}</Text>
              <TouchableOpacity style={styles.followButton} onPress={() => handleLinks(data.social_profile_linkedin_profile)}>
                <Text style={styles.followButtonText}>Open Link</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
            <Image style={styles.image} source={{ uri: "https://img.icons8.com/color/240/000000/twitter-circled--v1.png" }} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Twitter</Text>
              <Text style={styles.count}>{data.social_profile_twitter_profile ? "Twitter Profile Added" : "No Twitter profile"}</Text>
              <TouchableOpacity style={styles.followButton} onPress={() => handleLinks(data.social_profile_twitter_profile)}>
                <Text style={styles.followButtonText}>Open Link</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
            <Image style={styles.image} source={{ uri: "https://img.icons8.com/office/160/000000/whatsapp--v1.png" }} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>WhatsApp</Text>
              <Text style={styles.count}>{data.social_profile_whatsapp_profile ? data.social_profile_whatsapp_profile : "No WhatsApp Added"}</Text>
              <TouchableOpacity style={styles.followButton} onPress={() => callNumber(data.social_profile_whatsapp_profile)}>
                <Text style={styles.followButtonText}>Call</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => console.log("Hello")}>
            <Image style={styles.image} source={{ uri: "https://img.icons8.com/color/240/000000/skype--v1.png" }} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Skype</Text>
              <Text style={styles.count}>{data.social_profile_skype_profile ? "Skype Added" : "No Skype profile"}</Text>
              <TouchableOpacity style={styles.followButton} onPress={() => handleLinks(data.social_profile_skype_profile)}>
                <Text style={styles.followButtonText}>Open Link</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity></View>))}

    </View>
  )
}

export default SocialCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7"
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'flex-start',
    color: "#3399ff",
    fontWeight: 'bold'
  },
  count: {
    fontSize: 12,
    flex: 1,
    alignSelf: 'flex-start',
    color: "#6666ff",
    // position: "relative"
    // padding: 10
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#33B5E5",
  },
  followButtonText: {
    color: "#1E1E1E",
    fontSize: 12,
  },
})