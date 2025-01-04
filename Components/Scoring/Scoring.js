import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';
import { AnimatedRollingNumber } from "react-native-animated-rolling-numbers";
import { Easing } from "react-native-reanimated";
import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';


export default function Scoring(props){
    
    
    const [autonomous, setAutonomous] = React.useState(0);
    const [drive, setDrive] = React.useState(0);
    const [Match, setMatch] = React.useState(true);
 
    /// AUTONOMIE

        /// SCORES 
        const [penalty, setPenalty] = React.useState(0);
        const [points, setPoints] = React.useState(0);
    
        
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
    },[netZone,lowBasket, highBasket, highChamber, lowChamber, observerAuto1, ascentAuto1,
        netZoneD,lowBasketD, highBasketD, highChamberD, lowChamberD, minorF, majorF, oz1D, noneAuto1D, ascent1D, ascent2D, ascent3D,
        oz1DB, noneAuto1DB, ascent1DB, ascent2DB, ascent3DB, noneAuto1, observerAuto2,noneAuto2, ascentAuto2
    ]);
    
   
    
    return (
        <>
            
            <View style={styles.container}>
            
                <Pressable style={styles.logo} onPress={()=>{
                        console.log("soemhting")
                        navigation.navigate('welcome')
                    }}>
                     
                     <Text style={styles.title}>SCORING</Text>
                     <Image source={require('./logoSH.png')} style ={styles.img}></Image>
                     
                </Pressable>
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
                </View>
            </View>
            
            <ScrollView style={styles.ScrollViewstyle}>
                    {Match &&
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
                            <Pressable style={styles.minusButton} onPress={()=>{
                                
                                updateScore();
                                if(netZone >= 1){
                                    setNetZone(netZone - 1);
                                    setNetZoneD(netZoneD - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{netZone}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                updateScore();
                                setNetZone(netZone + 1);
                                setNetZoneD(netZoneD + 1);
                                console.log(netZone);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// low basket :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>low basket</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(lowBasket >= 1){
                                    setLowBasket(lowBasket - 1);
                                    setLowBasketD(lowBasketD - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{lowBasket}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setLowBasket(lowBasket + 1);
                                setLowBasketD(lowBasketD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// high basket :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>high basket</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(highBasket >= 1){
                                    setHighBasket(highBasket - 1);
                                    setHighBasketD(highBasketD - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{highBasket}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setHighBasket(highBasket + 1);
                                setHighBasketD(highBasketD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

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
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(lowChamber >= 1){
                                    setLowChamber(lowChamber - 1);
                                    setLowChamberD(lowChamberD - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{lowChamber}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setLowChamber(lowChamber + 1);
                                setLowChamberD(lowChamberD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// high chamber :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>high chamber</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(highChamber >= 1){
                                    setHighChamber(highChamber - 1);
                                    setHighChamberD(highChamberD - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{highChamber}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setHighChamber(highChamber + 1);
                                setHighChamberD(highChamberD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>
                    </View>

                    {
                        /// robot park 1
                    }
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> ROBOT 1 PARK </Text>
                        <View style={styles.buttonWrap}>
                            <Pressable style={ noneAuto1 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                console.log(noneAuto1);
                                setNoneAuto1(1);
                                setAscentAuto1(0);
                                setObserverAuto1(0);
                            }}>
                                    <Text style={styles.buttonLeftSideText}>none</Text>
                            </Pressable>
                            <Pressable style={ascentAuto1 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                setNoneAuto1(0);
                                setAscentAuto1(1);
                                setObserverAuto1(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>ascent level 1</Text>
                            </Pressable>
                            <Pressable style={observerAuto1 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                setNoneAuto1(0);
                                setAscentAuto1(0);
                                setObserverAuto1(1);
                            }}>
                                <Text style={styles.buttonLeftSideText}>observation</Text>
                            </Pressable>
                        </View>
                       
                    </View>

                    {
                        /// robot park 2
                    }
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> ROBOT 2 PARK </Text>
                        <View style={styles.buttonWrap}>
                            <Pressable style={ noneAuto2 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                console.log(noneAuto1);
                                setNoneAuto2(1);
                                setAscentAuto2(0);
                                setObserverAuto2(0);
                            }}>
                                    <Text style={styles.buttonLeftSideText}>none</Text>
                            </Pressable>
                            <Pressable style={ascentAuto2 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                setNoneAuto2(0);
                                setAscentAuto2(1);
                                setObserverAuto2(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>ascent level 1</Text>
                            </Pressable>
                            <Pressable style={observerAuto2 ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                setNoneAuto2(0);
                                setAscentAuto2(0);
                                setObserverAuto2(1);
                            }}>
                                <Text style={styles.buttonLeftSideText}>observation</Text>
                            </Pressable>
                        </View>
                       
                    </View>

                    {
                        /**
                         * 
                         * DRIVER CONTROL
                         */
                    }

                    
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
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(netZoneD >= 1){
                                    setNetZoneD(netZoneD - 1);
                                  
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{netZoneD}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setNetZoneD(netZoneD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// low basket :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>low basket</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(lowBasketD >= 1){
                                    setLowBasketD(lowBasketD - 1);
                                    
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{lowBasketD}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                            
                                setLowBasketD(lowBasketD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// high basket :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>high basket</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(highBasketD >= 1){
                                    setHighBasketD(highBasketD - 1);
                                    
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{highBasketD}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setHighBasketD(highBasketD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

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
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(lowChamberD >= 1){
                                    setLowChamberD(lowChamberD - 1);
                                    
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{lowChamberD}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setLowChamberD(lowChamberD + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// high chamber :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>high chamber</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(highChamberD >= 1){
                                    setHighChamberD(highChamberD - 1);
                                    
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{highChamberD}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setHighChamberD(highChamberD + 1);

                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>
                    </View>

                    {
                        /// robot park 1
                    }
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> ROBOT 1 LOCATION </Text>
                        <View style={styles.buttonWrap}>
                            <Pressable style={ noneAuto1D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                             
                                setNoneAuto1D(1);
                                setAscent1D(0);
                                setAscent2D(0);
                                setAscent3D(0);
                                setoz1D(0);
                            }}>
                                    <Text style={styles.buttonLeftSideText}>no</Text>
                            </Pressable>
                            <Pressable style={ascent1D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                setNoneAuto1D(0);
                                setAscent1D(1);
                                setAscent2D(0);
                                setAscent3D(0);
                                setoz1D(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>level 1</Text>
                            </Pressable>
                            <Pressable style={ascent2D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                 setNoneAuto1D(0);
                                 setAscent1D(0);
                                 setAscent2D(1);
                                 setAscent3D(0);
                                 setoz1D(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>level 2</Text>
                            </Pressable>

                            <Pressable style={ascent3D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                 setNoneAuto1D(0);
                                 setAscent1D(0);
                                 setAscent2D(0);
                                 setAscent3D(1);
                                 setoz1D(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>level 3</Text>
                            </Pressable>

                            <Pressable style={oz1D ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                 setNoneAuto1D(0);
                                 setAscent1D(0);
                                 setAscent2D(0);
                                 setAscent3D(0);
                                 setoz1D(1);
                            }}>
                                <Text style={styles.buttonLeftSideText}>OZ</Text>
                            </Pressable>
                            
                            

                        </View>
                       
                    </View>


                    {
                        /// robot park 2
                    }
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> ROBOT 2 LOCATION </Text>
                        <View style={styles.buttonWrap}>
                            <Pressable style={ noneAuto1DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                             
                                setNoneAuto1DB(1);
                                setAscent1DB(0);
                                setAscent2DB(0);
                                setAscent3DB(0);
                                setoz1DB(0);
                            }}>
                                    <Text style={styles.buttonLeftSideText}>no</Text>
                            </Pressable>
                            <Pressable style={ascent1DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                setNoneAuto1DB(0);
                                setAscent1DB(1);
                                setAscent2DB(0);
                                setAscent3DB(0);
                                setoz1DB(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>level 1</Text>
                            </Pressable>
                            <Pressable style={ascent2DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                 setNoneAuto1DB(0);
                                 setAscent1DB(0);
                                 setAscent2DB(1);
                                 setAscent3DB(0);
                                 setoz1DB(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>level 2</Text>
                            </Pressable>

                            <Pressable style={ascent3DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                 setNoneAuto1DB(0);
                                 setAscent1DB(0);
                                 setAscent2DB(0);
                                 setAscent3DB(1);
                                 setoz1DB(0);
                            }}>
                                <Text style={styles.buttonLeftSideText}>level 3</Text>
                            </Pressable>

                            <Pressable style={oz1DB ? styles.buttonLeftSideClicked : styles.buttonLeftSide} onPress={()=>{
                                 setNoneAuto1DB(0);
                                 setAscent1DB(0);
                                 setAscent2DB(0);
                                 setAscent3DB(0);
                                 setoz1DB(1);
                            }}>
                                <Text style={styles.buttonLeftSideText}>OZ</Text>
                            </Pressable>
                            
                            

                        </View>
                       
                    </View>
                    
                    {
                            /// fouls  :
                    }
                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> FOULS </Text>

                        {
                            /// minor fouls :
                        }
                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>minor fouls</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                
                                updateScore();
                                if(minorF >= 1){
                                    setMinorF(minorF - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{minorF}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                updateScore();
                                setMinorF(minorF + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>

                        {
                            /// major fouls :
                        }

                        <View style={styles.buttonGrowing}> 
                            <View style={styles.buttonLeftSide}>
                                <Text style={styles.buttonLeftSideText}>major fouls</Text>
                            </View>
                            <Pressable style={styles.minusButton} onPress={()=>{
                                if(majorF >= 1){
                                    setMajorF(majorF - 1);
                                }
                                updateScore();
                            }}>
                                <Text style={styles.buttonMinusText}>-</Text>
                            </Pressable>
                            <Text style={styles.cntText}>{majorF}</Text>
                            <Pressable style={styles.plusButton} onPress={()=>{
                                setMajorF(majorF + 1);
                                updateScore();
                            }}>
                                <Text style={styles.buttonPlusText}>+</Text>
                            </Pressable>

                        </View>
                    </View>

                    {
                        ///Settings
                    }

                </View>
                }
                {!Match&&
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
                                    <View style={styles.SampleContainer}>
                        <Text style={styles.headerText}> SETTINGS </Text>
                        <View style={styles.buttonWrap}>
                    
                            <Pressable style={styles.buttonLeftSide} onPress={
                                ()=>{
                                    
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
                                    
                                }
                            }>
                                <Text style={styles.buttonLeftSideText}>reset score</Text>
                            </Pressable>
                            <Pressable style={styles.buttonLeftSide} onPress={()=>{
                                navigation.navigate('match');   
                            }}>
                                <Text style={styles.buttonLeftSideText}>start match</Text>
                            </Pressable>
                            <Pressable style={styles.buttonLeftSide} onPress={
                                ()=>{
                                    setMatch(!Match);       
                                }
                            }>
                                <Text style={styles.buttonLeftSideText}>see stats</Text>
                            </Pressable>
                            
                            

                        </View>
                       
                    </View>
            </ScrollView>
            
        </>
    )
}
const styles = StyleSheet.create({
    digits: {
        
        paddingTop: 19,
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 2,
        color: "#FFFFFF",
    },
    ScrollViewstyle:{
        backgroundColor: "#141414",
    },
    buttonLeftSideClicked:{
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
        marginTop: 7
    },
    buttonMinusText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        marginTop: -10,
    },
    buttonLeftSide:{
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
        width: 40,
        height: 40, 
        borderRadius: 10,
        backgroundColor: "#7DDB3B",
        
        borderRadius: 50,
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
        borderWidth: 2,
        borderColor: "white",
        display:"flex",
        marginLeft: 10,
        marginRight: 10,
        width: "auto",
        borderRadius: 20,
        alignContent: "center",
        alignItems: "center",
        marginBottom: 30
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