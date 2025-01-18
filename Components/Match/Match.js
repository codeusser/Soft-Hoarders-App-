import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import {  TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { AnimatedRollingNumber } from "react-native-animated-rolling-numbers";
import { Easing } from "react-native-reanimated";
import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';


export default function Match(props){
    
    
    const [autonomous, setAutonomous] = React.useState(0);
    const [stats, setStats] = React.useState(false);
    const [drive, setDrive] = React.useState(0);
    let arr = [10, 30, 10, 120];
  // let arr = [5, 5, 5, 5];
    
   const [index, setIndex] = React.useState(0);
    const [Match, setMatch] = React.useState(false);
    const [paused, setPaused] = React.useState(false);
 
    /// AUTONOMIE

        /// SCORES 
        const [penalty, setPenalty] = React.useState(0);
        const [points, setPoints] = React.useState(0);
        const [rested, setRested] = React.useState(false);
        
        /// SAMPLE
        const [netZone, setNetZone] = React.useState(0);
        const [lowBasket, setLowBasket] = React.useState(0);
        const [highBasket, setHighBasket] = React.useState(0);


        /// SPECIMEN
        const [lowChamber, setLowChamber] = React.useState(0);
        const [highChamber, setHighChamber] = React.useState(0);
        const navigation = useNavigation();


        /// ROBOT 1 PARK 
        const [observerAuto1, setObserverAuto1] = React.useState(0);
        const [noneAuto1, setNoneAuto1] = React.useState(0);
        const [ascentAuto1, setAscentAuto1] = React.useState(0);

         /// ROBOT 2 PARK 
         const [observerAuto2, setObserverAuto2] = React.useState(0);
         const [noneAuto2, setNoneAuto2] = React.useState(0);
         const [ascentAuto2, setAscentAuto2] = React.useState(0);
    
    /// DRIVING CONTROL

        const [penaltyD, setPenaltyD] = React.useState(0);
        const [pointsD, setPointsD] = React.useState(0);
    
        
        /// SAMPLE
        const [netZoneD, setNetZoneD] = React.useState(0);
        const [lowBasketD, setLowBasketD] = React.useState(0);
        const [highBasketD, setHighBasketD] = React.useState(0);


        /// SPECIMEN
        const [lowChamberD, setLowChamberD] = React.useState(0);
        const [highChamberD, setHighChamberD] = React.useState(0);



        /// ROBOT 1 PARK 
        const [oz1D, setoz1D] = React.useState(0);
        const [noneAuto1D, setNoneAuto1D] = React.useState(0);
        const [ascent1D, setAscent1D] = React.useState(0);
        const [ascent2D, setAscent2D] = React.useState(0);
        const [ascent3D, setAscent3D] = React.useState(0);


         /// ROBOT 2 PARK 
         const [oz1DB, setoz1DB] = React.useState(0);
         const [noneAuto1DB, setNoneAuto1DB] = React.useState(0);
         const [ascent1DB, setAscent1DB] = React.useState(0);
         const [ascent2DB, setAscent2DB] = React.useState(0);
         const [ascent3DB, setAscent3DB] = React.useState(0);

         /// FOUL 

         const [minorF, setMinorF] = React.useState(0);
         const [majorF, setMajorF] = React.useState(0);
         const [procent, setProcent] = React.useState(0);
         const [seconds, setSeconds] = React.useState(0);


    function updateScore(){

      //  let pointsVal = netZone * 5;
      //  console.log(netZone);
       /// setPoints(pointsVal);

    }
    useEffect(() => {
        /// updating score
        
        let sample = netZone * 2  + lowBasket * 4 + highBasket * 8;
        let specimen = lowChamber * 6 + highChamber * 10;
        let robot1Park = observerAuto1 * 3  + ascentAuto1 * 3;
        let robot2Park = observerAuto2 * 3  + ascentAuto2 * 3;

        let auto = sample + specimen + robot1Park + robot2Park;

        let sampleD = netZoneD * 2  + lowBasketD * 4 + highBasketD * 8;
        let specimenD = lowChamberD * 6 + highChamberD * 10;
        let park1D = oz1D * 3 + ascent1D * 3 + ascent2D * 15 + ascent3D * 30;
        let park2D = oz1DB * 3 + ascent1DB * 3 + ascent2DB * 15 + ascent3DB * 30;
       
        let drive = sampleD + specimenD + park1D + park2D;
        setDrive(drive);
        let foul = 5 * minorF + 15 * majorF;

        setAutonomous(auto);

        setPoints(auto + drive);
        setPenalty(foul);
        const intervalId = setInterval(() => {
            if(index == 1 && paused == false)setMatch(true);
            
            if(Match === true || index === 0) {
                if(seconds === arr[index]) {
                    setSeconds(0);
                    if(index < 3){
                        setIndex(i => i + 1);
                    }else{
                        setIndex(i => i + 1);
                        setStats(true);
                        setMatch(false);
                    }
                }
                

                setSeconds(c => c + 1);
                setProcent(Math.floor(seconds * 100 / arr[index]));
            }
        }, 1000);
        return () => clearInterval(intervalId);

    },[netZone,lowBasket, highBasket, highChamber, lowChamber, observerAuto1, ascentAuto1,
        netZoneD,lowBasketD, highBasketD, highChamberD, lowChamberD, minorF, majorF, oz1D, noneAuto1D, ascent1D, ascent2D, ascent3D,
        oz1DB, noneAuto1DB, rested, ascent1DB, ascent2DB, ascent3DB, noneAuto1, observerAuto2,noneAuto2, ascentAuto2, seconds, procent, Match]);
    
   
    
    return (
        <>
           
            <View style={styles.container}>
                  <Image source={require('./bule1.png')} style={styles.imageBule}></Image>
                               
                < TouchableOpacity style={styles.logo} onPress={()=>{
                        console.log("soemhting")
                        navigation.navigate('welcome')
                    }}>
                     
                     <Text style={styles.title}>MATCH</Text>
                     <Image source={require('./logoSH.png')} style ={styles.img}></Image>
                     
                </ TouchableOpacity>
                <View style={styles.scores}>
                        <View style={styles.ScorePoints}>
                            <View style={styles.points}>
                            <AnimatedRollingNumber
                                value={points}
                                enableCompactNotation
                                useGrouping
                                compactToFixed={3}
                                textStyle={styles.digits}
                                spinningAnimationConfig={{ duration: 400, easing: Easing.linear }}
                            />
                            </View>
                            <Text style={styles.scoreDescription}>points</Text>
                        </View>
                        <View>
                            <View style={styles.penalty}>
                                <AnimatedRollingNumber
                                    value={penalty}
                                    enableCompactNotation
                                    useGrouping
                                    compactToFixed={1}
                                    textStyle={styles.digits}
                                    spinningAnimationConfig={{ duration: 400, easing: Easing.linear }}
                                />
                            </View>
                            <Text style={styles.scoreDescription}>penalty</Text>
                        </View>
                        <View>
                            <AnimatedCircularProgress
                                    size={80}
                                    width={5}
                                    fill={procent}
                                    tintColor="#7DDB3B"
                                    backgroundColor="#ffffff">
                                    {
                                        (fill) => (
                                        <Text style={styles.headerText}>
                                            { seconds }
                                        </Text>
                                        )
                                    }
                            </AnimatedCircularProgress>
                            <Text style={styles.scoreDescription}>time</Text>
                        </View>
                     </View>
                                
                    </View>
             <View onMoveShouldSetResponderCapture={() => false} onStartShouldSetResponderCapture={() => false}
                            style={{
                                flex: 1
                            }}>
           
            <ScrollView style={styles.ScrollViewstyle}>
                    
                    {Match  &&
                        <View>
                        <Text style={styles.headerTextOne}>AUTONOMOUS</Text>

                        {
                            /// sample
                        }

                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> SAMPLE </Text>

                            {
                                /// netZone :
                            }
                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>net zone</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    
                                    updateScore();
                                    if(netZone >= 1){
                                        setNetZone(netZone - 1);
                                        setNetZoneD(netZoneD - 1);
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{netZone}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    updateScore();
                                    setNetZone(netZone + 1);
                                    setNetZoneD(netZoneD + 1);
                                    console.log(netZone);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            {
                                /// low basket :
                            }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>low basket</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(lowBasket >= 1){
                                        setLowBasket(lowBasket - 1);
                                        setLowBasketD(lowBasketD - 1);
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{lowBasket}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setLowBasket(lowBasket + 1);
                                    setLowBasketD(lowBasketD + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            {
                                /// high basket :
                            }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>high basket</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(highBasket >= 1){
                                        setHighBasket(highBasket - 1);
                                        setHighBasketD(highBasketD - 1);
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{highBasket}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setHighBasket(highBasket + 1);
                                    setHighBasketD(highBasketD + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            

                        </View>


                        {
                            /// Specimen
                        }

                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> SPECIMEN </Text>

                            {
                                /// low chamber :
                            }
                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>low chamber</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(lowChamber >= 1){
                                        setLowChamber(lowChamber - 1);
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{lowChamber}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setLowChamber(lowChamber + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            {
                                /// high chamber :
                            }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>high chamber</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(highChamber >= 1){
                                        setHighChamber(highChamber - 1);
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{highChamber}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setHighChamber(highChamber + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>
                        </View>

                        {
                            /// robot park 1
                        }
                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> ROBOT 1 PARK </Text>
                            <View style={styles.buttonWrap}>
                                < TouchableOpacity style={ noneAuto1 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    console.log(noneAuto1);
                                    setNoneAuto1(1);
                                    setAscentAuto1(0);
                                    setObserverAuto1(0);
                                }}>
                                        <Text style={styles.buttonLeftSideText}>none</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={ascentAuto1 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1(0);
                                    setAscentAuto1(1);
                                    setObserverAuto1(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>ascent level 1</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={observerAuto1 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1(0);
                                    setAscentAuto1(0);
                                    setObserverAuto1(1);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>observation</Text>
                                </ TouchableOpacity>
                            </View>
                        
                        </View>

                        {
                            /// robot park 2
                        }
                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> ROBOT 2 PARK </Text>
                            <View style={styles.buttonWrap}>
                                < TouchableOpacity style={ noneAuto2 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    console.log(noneAuto1);
                                    setNoneAuto2(1);
                                    setAscentAuto2(0);
                                    setObserverAuto2(0);
                                }}>
                                        <Text style={styles.buttonLeftSideText}>none</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={ascentAuto2 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto2(0);
                                    setAscentAuto2(1);
                                    setObserverAuto2(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>ascent level 1</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={observerAuto2 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto2(0);
                                    setAscentAuto2(0);
                                    setObserverAuto2(1);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>observation</Text>
                                </ TouchableOpacity>
                            </View>
                        
                        </View>
                    </View>
                    }
                    {
                        /**
                         * 
                         * DRIVER CONTROL
                         */
                    }

                    {Match  &&
                        <View>
                        <Text style={styles.headerTextOne}>DRIVER CONTROL</Text>

                        {
                            /// sample
                        }

                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> SAMPLE </Text>

                            {
                                /// netZone :
                            }
                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>net zone</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(netZoneD >= 1){
                                        setNetZoneD(netZoneD - 1);
                                    
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{netZoneD}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setNetZoneD(netZoneD + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            {
                                /// low basket :
                            }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>low basket</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(lowBasketD >= 1){
                                        setLowBasketD(lowBasketD - 1);
                                        
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{lowBasketD}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                
                                    setLowBasketD(lowBasketD + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            {
                                /// high basket :
                            }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>high basket</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(highBasketD >= 1){
                                        setHighBasketD(highBasketD - 1);
                                        
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{highBasketD}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setHighBasketD(highBasketD + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            
                        
                        </View>

                        {
                            /// Specimen
                        }

                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> SPECIMEN </Text>

                            {
                                /// low chamber :
                            }
                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>low chamber</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(lowChamberD >= 1){
                                        setLowChamberD(lowChamberD - 1);
                                        
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{lowChamberD}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setLowChamberD(lowChamberD + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>

                            {
                                /// high chamber :
                            }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>high chamber</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(highChamberD >= 1){
                                        setHighChamberD(highChamberD - 1);
                                        
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{highChamberD}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setHighChamberD(highChamberD + 1);

                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>
                        </View>

                        {
                            /// robot park 1
                        }
                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> ROBOT 1 LOCATION </Text>
                            <View style={styles.buttonWrap}>
                                < TouchableOpacity style={ noneAuto1D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                
                                    setNoneAuto1D(1);
                                    setAscent1D(0);
                                    setAscent2D(0);
                                    setAscent3D(0);
                                    setoz1D(0);
                                }}>
                                        <Text style={styles.buttonLeftSideText}>no</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={ascent1D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1D(0);
                                    setAscent1D(1);
                                    setAscent2D(0);
                                    setAscent3D(0);
                                    setoz1D(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>level 1</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={ascent2D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1D(0);
                                    setAscent1D(0);
                                    setAscent2D(1);
                                    setAscent3D(0);
                                    setoz1D(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>level 2</Text>
                                </ TouchableOpacity>

                                < TouchableOpacity style={ascent3D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1D(0);
                                    setAscent1D(0);
                                    setAscent2D(0);
                                    setAscent3D(1);
                                    setoz1D(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>level 3</Text>
                                </ TouchableOpacity>

                                < TouchableOpacity style={oz1D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1D(0);
                                    setAscent1D(0);
                                    setAscent2D(0);
                                    setAscent3D(0);
                                    setoz1D(1);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>OZ</Text>
                                </ TouchableOpacity>
                                
                                

                            </View>
                        
                        </View>


                        {
                            /// robot park 2
                        }
                        <View style={styles.SampleContainer}>
                            <Text style={styles.headerText}> ROBOT 2 LOCATION </Text>
                            <View style={styles.buttonWrap}>
                                < TouchableOpacity style={ noneAuto1DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                
                                    setNoneAuto1DB(1);
                                    setAscent1DB(0);
                                    setAscent2DB(0);
                                    setAscent3DB(0);
                                    setoz1DB(0);
                                }}>
                                        <Text style={styles.buttonLeftSideText}>no</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={ascent1DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1DB(0);
                                    setAscent1DB(1);
                                    setAscent2DB(0);
                                    setAscent3DB(0);
                                    setoz1DB(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>level 1</Text>
                                </ TouchableOpacity>
                                < TouchableOpacity style={ascent2DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1DB(0);
                                    setAscent1DB(0);
                                    setAscent2DB(1);
                                    setAscent3DB(0);
                                    setoz1DB(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>level 2</Text>
                                </ TouchableOpacity>

                                < TouchableOpacity style={ascent3DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1DB(0);
                                    setAscent1DB(0);
                                    setAscent2DB(0);
                                    setAscent3DB(1);
                                    setoz1DB(0);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>level 3</Text>
                                </ TouchableOpacity>

                                < TouchableOpacity style={oz1DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                    setNoneAuto1DB(0);
                                    setAscent1DB(0);
                                    setAscent2DB(0);
                                    setAscent3DB(0);
                                    setoz1DB(1);
                                }}>
                                    <Text style={styles.buttonLeftSideText}>OZ</Text>
                                </ TouchableOpacity>
                                
                                

                            </View>
                        
                        </View>
                        </View>
                    }
                    {
                            /// fouls  :
                    }
                    { Match==true &&
                    <View>
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> FOULS </Text>

                        {
                            /// minor fouls :
                        }
                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>minor fouls</Text>
                            </View>
                            < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                
                                updateScore();
                                if(minorF >= 1){
                                    setMinorF(minorF - 1);
                                }
                                updateScore();
                            }}>
                                   <Image style={styles.minusButton} source={require('./minus.png')} />
                            </ TouchableOpacity>
                            <Text style={styles.cntText}>{minorF}</Text>
                            < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                updateScore();
                                setMinorF(minorF + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </ TouchableOpacity>

                        </View>

                        {
                            /// major fouls :
                        }

                            <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                    <Text style={styles.buttonLeftSideText}>major fouls</Text>
                                </View>
                                < TouchableOpacity style={styles.minusButton} onPress={()=>{
                                    if(majorF >= 1){
                                        setMajorF(majorF - 1);
                                    }
                                    updateScore();
                                }}>
                                       <Image style={styles.minusButton} source={require('./minus.png')} />
                                </ TouchableOpacity>
                                <Text style={styles.cntText}>{majorF}</Text>
                                < TouchableOpacity style={styles.plusButton} onPress={()=>{
                                    setMajorF(majorF + 1);
                                    updateScore();
                                }}>
                                    <Text style={styles.buttonPlusText}>+</Text>
                                </ TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    }
                    {stats == true &&
                    <View style={styles.SampleContainer}>
                         <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                     <Text style={styles.buttonLeftSideText}>Autonomous</Text>
                                </View>
                                <Text style={styles.headerText}>{autonomous}</Text>
                         </View>
                         <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                     <Text style={styles.buttonLeftSideText}>TeleOp</Text>
                                </View>
                                <Text style={styles.headerText}>{drive}</Text>
                         </View>
                         <View style={styles.buttonGrowing}> 
                                <View style={styles.buttonLeftSide}>
                                     <Text style={styles.buttonLeftSideText}>Fouls</Text>
                                </View>
                                <Text style={styles.headerText}>{penalty}</Text>
                         </View>
                    </View>
                    }
                    {
                        /// robot park 2
                    }
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> SETTINGS </Text>
                        <View style={styles.buttonWrap}>
                    
                            < TouchableOpacity style={styles.buttonLeftSide} onPress={
                                ()=>{
                                    setRested(!rested);
                                    setPenalty(0);
                                    setPoints(0);
                                    setNetZone(0);
                                    setLowBasket(0);
                                    setHighBasket(0);
                                    setLowChamber(0);
                                    setHighChamber(0);
                                    setObserverAuto1(0);
                                    setNoneAuto1(0);
                                    setAscentAuto1(0);
                                    setObserverAuto2(0);
                                    setNoneAuto2(0);
                                    setAscentAuto2(0);
                                    setPenaltyD(0);
                                    setPointsD(0);
                                    setNetZoneD(0);
                                    setLowBasketD(0);
                                    setHighBasketD(0);
                                    setLowChamberD(0);
                                    setHighChamberD(0);
                                    setoz1D(0);
                                    setNoneAuto1D(0);
                                    setAscent1D(0);
                                    setAscent2D(0);
                                    setAscent3D(0);
                                    setoz1DB(0);
                                    setNoneAuto1DB(0);
                                    setAscent1DB(0);
                                    setAscent2DB(0);
                                    setAscent3DB(0);
                                    setMinorF(0);
                                    setMajorF(0);
                                    setSeconds(0);
                                    setIndex(0);
                                    setStats(false);
                                    setMatch(false);

                                }
                            }>
                                <Text style={styles.buttonLeftSideText}>reset Match</Text>
                            </ TouchableOpacity>
                            < TouchableOpacity style={styles.buttonLeftSide} onPress={()=>{
                                setMatch(false);
                                setPaused(true);
                            }}>
                                <Text style={styles.buttonLeftSideText}>Stop</Text>
                            </ TouchableOpacity>
                            < TouchableOpacity style={styles.buttonLeftSide} onPress={()=>{
                                setMatch(true);
                                setPaused(false);
                            }}>
                                <Text style={styles.buttonLeftSideText}>Play</Text>
                            </ TouchableOpacity>
                            
                            

                        </View>
                       
                    </View>
                    
            </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    imageBule2:{
        zIndex: 0,
        position : "absolute",
        
        marginTop: 0,
        width: 220,
        
       resizeMode: 'contain',
        height: 170,
        left: 230,
        top: "88.5%",
    },
    imageBule:{
         position : "absolute",
        marginTop: 0,
        width: 200,
        right: 1,
        top: 0,
       resizeMode: 'contain',
        height: 150,
        marginRight: 260
    },
    digits: {
        
        paddingTop: 19,
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 2,
        color: "#FFFFFF",
    },
    ScrollViewstyle:{
        flex: 1,
        backgroundColor: "#141414",
    },
    buttonLeftSideClicked:{
        position: "relative",
        zIndex: 10,
        borderRadius: 10,
        width: 110,
        height: 40,
        color: "white",
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: "#7DDB3B",
    },
    buttonWrap:{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    headerTextOne:{
        color: "white",
        textAlign: "center",
        fontSize: 35,
        marginBottom: 20,
        marginTop: 20
    },
    cntText:{
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
    buttonPlusText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginTop: -2,
    },
    plusButton:{
        
        zIndex: 0,
        width: 40,
        height: 40, 
        borderRadius: 10,
        backgroundColor: "#7DDB3B",
        
        borderRadius: 50,
    },
    buttonLeftSideText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: "BebasNeue-Regular",
        marginTop: 7
    },
    buttonMinusText:{

        position: "relative",
        
        textAlign: 'center',
        color: 'white',
        height: 30,

        paddingTop:0,
        marginTop: 0,
        width: 10,
        fontSize: 40,
        top: 0,
        bottom: 0,
        left: 12,
        backgroundColor: "black",
        zIndex: 0,
    },
    buttonLeftSide:{
        position: "relative",
        zIndex: 10,
        borderWidth: 2,
        borderColor: "#7DDB3B",
        borderRadius: 10,
        width: 110,
        height: 40,
        color: "white",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        backgroundColor: "#404040",
    },
    minusButton:{
        //borderWidth: 1,
        zIndex: 0,
        
    },
    buttonGrowing:{
        marginTop: 10,
        display:"flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    headerText:{
        color: "white",
        fontSize: 30,
    },
    SampleContainer:{
        borderWidth: 3,
        borderColor: "white",
        display:"flex",
        marginLeft: 10,
        height: "auto",
        marginRight: 10,
        width: "auto",
        fontFamily: "PTSans-Regular",
        borderRadius: 20,
        alignContent: "center",
        alignItems: "center",
        marginBottom: 25
    },
    scores:{
        marginTop: 20,
        marginBottom: 20,
        display:"flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    ScorePoints:{
        width: 80,
        marginRight: 0,
    },
    scoreDescription:{
        textAlign: "center",
        fontSize: 18,
        color: "white",
    },
    scoreNumbers:{
        marginTop: 20,
        color: "white",
        textAlign: "center",
        fontSize: 40,
    },
    points:{
        borderWidth: 2,
        borderColor: "white",
        width: 80,
        height: 80,
        textAlign: "center",
        backgroundColor: "#141414",
        borderRadius: 50,
        marginRight: 0,
    },
    penalty:{
        borderWidth: 2,
        borderColor: "white",
        width: 80,
        height: 80,
        backgroundColor: "#141414",
        borderRadius: 50
    },
    container:{
        backgroundColor: "#141414",
       // height: "100%",
       // display: "flex",
         //alignContent: "center",
       alignItems: "center",
    },
    title:{
        fontSize: 20,
        color: "white",
        textAlign: "center",
    },  
    logo:{
        marginTop: 20,
        display:"flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },  
    img:{
        width: 50,
        height: 50
    }
    
})