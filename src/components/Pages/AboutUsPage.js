import React from 'react';
import {Parallax} from 'react-parallax';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import {Divider, Paper, Avatar} from "@material-ui/core";
import ScrollUpButton from "react-scroll-up-button";
import Header from "../HeaderComponents/Header";

const useStyle = makeStyles((theme) => ({
    avatorStyle: {
        '&:hover, &:focus': {
            WebkitTransform: "scale(1.05)",
            MsTransform: "scale(1.05)",
            transform: "scale(1.05)",
            opacity:'0.7',
            color:'white',
        },
    }
}));
const backgroundCss = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
};

const avatarImg1 = "https://avatars0.githubusercontent.com/u/62140364?s=400&u=3c46da2ea7f10d932acac884de5d6a5204dcaff7&v=4";

const inlineStyle = {
    height: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};


function AboutUsPage() {
    const classes = useStyle();
    const theme = useTheme();


    const CustomDivider = () =>
        <Divider width={'25%'}
                 style={{
                     backgroundColor: 'rgba(255,230,0)',
                     margin: '2% auto',
                 }}/>;

    const PageTwoComponent = ({title, desc}) =>
        <Paper square style={{
            backgroundColor: 'rgba(96,96,96,.85)',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: 'white',
            margin: '3%',
            fontFamily: "'Raleway', serif"
        }}>
            <h1>{title}</h1>
            <CustomDivider/>
            <h5 style={{
                lineHeight: '2',
                fontFamily: "'Montserrat', sans-serif"
            }}>{desc}</h5>
        </Paper>;

    const AvatarComponent = ({imgSrc, avatarName, avatarTitle}) =>
        <Box flexDirection={'column'}
             className={classes.avatorStyle}
             style={{
                 flexGrow: 3,
                 justifyContent: "center",
                 alignItems: 'center',
                 display: 'flex',
                 margin: '5vh',
             }}>
            <Avatar variant={'circle'}
                    src={imgSrc}
                    style={{
                        width: theme.spacing(25),
                        height: theme.spacing(25),
                    }}/>
            <CustomDivider/>
            <h3 style={{
                fontFamily: "'Montserrat', sans-serif"
            }}>{avatarName}</h3>
            <h4 style={{
                fontFamily: "'Montserrat', sans-serif"
            }}>{avatarTitle}</h4>
        </Box>;

    return (
        <>
            <Header isHeaderShouldBeStatic={true}/>
            <div style={{textAlign: 'center'}}>
                <ScrollUpButton/>
                <Parallax style={backgroundCss} strength={500}>
                    <div style={{height: 500}}>
                        <div style={inlineStyle}>
                            <Box flexDirection={'column'}>

                                {/*Title*/}
                                <h1 style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontFamily: "'Raleway', serif"
                                }}>
                                    IT'S SIMPLE!
                                </h1>
                                <CustomDivider/>
                                <h3 style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontFamily: "'Raleway', serif"
                                }}>
                                    We are a Health and Diseases news aggregator.
                                </h3>
                            </Box>
                        </div>
                    </div>

                    <div style={inlineStyle}>
                        <Box style={{
                            flexGrow: 1,
                            maxWidth: '170vh',
                        }}>
                            <PageTwoComponent title={'WHAT ARE WE DOING?'}
                                              desc={'EasyDeasy is a Health and Diseases news aggregator.\n' +
                                              '                                        We collect researches and news from across the web, a variety of well-trusted\n' +
                                              '                                        sources and filter by disease.\n' +
                                              '                                        We make the information accessible and comfortable manner to anyone.\n' +
                                              '                                        All the user has to do, is just to wait for our platform to send a notification\n' +
                                              '                                        when new research or relevant article that fits the criteria has been released\n' +
                                              '                                        after subscription of course, and enjoy the reading!'}/>

                            <PageTwoComponent title={"BUT WHY IT'S SO IMPORTANT TO US?"}
                                              desc={"A large part of our team in fact almost 70% of our team have at least one chronic disease that carries for life." +
                                              " We know how hard it is to find trusted information out there. WE ARE HERE TO HELP!"}/>
                            <PageTwoComponent title={'OUR MISSION'}
                                              desc={"We want to make the world better, accessible and comfortable, " +
                                              "ESPECIALLY when it's comes to health! " +
                                              "all the information is out there although most people are just trying too hard for so little information, the data is there, but not accessible." +
                                              " 6 IN 10 adults in the US have a chronic disease - US alone! "}/>
                        </Box>
                    </div>
                    <div style={{height: 150}}/>
                    <div style={{margin: 50}}>
                        <h1 style={{
                            fontSize: '15vh',
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontFamily: "'Raleway', serif",
                        }}>
                            MEET THE TEAM
                        </h1>
                        <CustomDivider/>
                        <Box display="flex"
                             flexWrap="wrap">
                            <AvatarComponent imgSrc={avatarImg1} avatarName={'Omer Pessach'} avatarTitle={'CTO'}/>
                            <AvatarComponent imgSrc={avatarImg1} avatarName={'Paz Bazak'} avatarTitle={'CEO'}/>
                            <AvatarComponent imgSrc={avatarImg1} avatarName={'Daniel Bauer'} avatarTitle={'CTO'}/>
                        </Box>
                    </div>
                    <div style={{height: 200}}/>
                </Parallax>
            </div>
        </>
    );
}

export default AboutUsPage;
