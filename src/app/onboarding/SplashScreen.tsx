import { StyleSheet, Text, View } from "react-native"
export default function DashboardScreen(){
    return(
        <View style={styles.heading}>
            <Text >SplashScreen</Text>
        </View>
    )
       
}

const  styles= StyleSheet.create({
      heading:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
      }
})