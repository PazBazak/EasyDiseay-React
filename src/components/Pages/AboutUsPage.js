import React from 'react';
import {Parallax} from 'react-parallax';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import {Divider, Paper, Avatar} from "@material-ui/core";
import ScrollUpButton from "react-scroll-up-button";
import Header from "../HeaderComponents/Header";
import {useSelector} from "react-redux";
import {
    FONT_FAMILY_MAIN_TEXT,
    FONT_FAMILY_SECONDARY_TEXT,
    PAGE_ONE_TITLE,
    PAGE_ONE_SUB_TITLE,
    PAGE_THREE_TITLE,
    PAGE_TWO_QUESTIONS_ANSWERS,
} from "../utils/Constants";

const useStyle = makeStyles((theme) => ({
    avatorStyle: {
        '&:hover, &:focus': {
            WebkitTransform: "scale(1.05)",
            MsTransform: "scale(1.05)",
            transform: "scale(1.05)",
            opacity: '0.7',
            color: 'white',
        },
    }
}));

function AboutUsPage() {
    const classes = useStyle();
    const theme = useTheme();
    const teamDetails = useSelector(state => state.aboutusState.teamDetails);

    const backgroundCss = {
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    };

    const inlineStyle = {
        height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const pageOneTextStyle = {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY_MAIN_TEXT,
    };

    const pageThreeMeetTheTeamTextStyle = {
        fontFamily: FONT_FAMILY_SECONDARY_TEXT,
    };

    // Space between the main components
    const SpaceBetweenPages = () =>
        <div style={{height: 150}}/>;

    // Title divider (golder divider)
    const CustomDivider = () =>
        <Divider width={'25%'}
                 style={{
                     backgroundColor: 'rgba(255,230,0)',
                     margin: '2% auto',
                 }}/>;

    const PageTwoComponent = ({question}) =>
        <Paper square style={{
            backgroundColor: 'rgba(96,96,96,.85)',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: 'white',
            margin: '3%',
            fontFamily: FONT_FAMILY_MAIN_TEXT,
        }}>
            <h1>{question.title}</h1>
            <CustomDivider/>
            <h5 style={{
                lineHeight: '2.5',
                fontFamily: FONT_FAMILY_SECONDARY_TEXT,
            }}>{question.desc}</h5>
        </Paper>;

    // Avatar component includes img, avatar name and avatar title - "Meet The Team"
    const AvatarComponent = ({detail}) =>
        <Box flexDirection={'column'}
             id={detail.id}
             className={classes.avatorStyle}
             style={{
                 flexGrow: 3,
                 justifyContent: "center",
                 alignItems: 'center',
                 display: 'flex',
                 margin: '5vh',
             }}>
            <Avatar variant={'circle'}
                    src={detail.img}
                    style={{
                        width: theme.spacing(25),
                        height: theme.spacing(25),
                    }}/>
            <CustomDivider/>
            <h3 style={pageThreeMeetTheTeamTextStyle}>{detail.name}</h3>
            <h4 style={pageThreeMeetTheTeamTextStyle}>{detail.title}</h4>
        </Box>;


    // On this specific page I prefer using style over className and useStyle, cuz in this page the style is less generic all page long,
    // each component has a different unique style and named it's a little complicated.
    return (
        <>
            <Header/>
            <div style={{textAlign: 'center'}}>
                <ScrollUpButton/>
                <Parallax style={backgroundCss} strength={500}>

                    {/*Page 1 ("IT'S SIMPLE!"*/}
                    <div style={{height: 500}}>
                        <div style={inlineStyle}>
                            <Box flexDirection={'column'}>

                                {/*Title*/}
                                <h1 style={pageOneTextStyle}>
                                    {PAGE_ONE_TITLE}
                                </h1>
                                <CustomDivider/>

                                {/*SubTitle*/}
                                <h3 style={pageOneTextStyle}>
                                    {PAGE_ONE_SUB_TITLE}
                                </h3>
                            </Box>
                        </div>
                    </div>

                    {/*Page 2 - Details*/}
                    <div style={inlineStyle}>
                        <Box style={{
                            flexGrow: 1,
                            maxWidth: '170vh',
                        }}>
                            {PAGE_TWO_QUESTIONS_ANSWERS.map((question) =>
                                <PageTwoComponent question={question}/>)}
                        </Box>
                    </div>

                    {/*Space between "Pages"*/}
                    <SpaceBetweenPages/>

                    {/*Page 3 - MEET THE TEAM*/}
                    <div style={{margin: 50}}>
                        <h1 style={{
                            fontSize: '15vh',
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontFamily: FONT_FAMILY_MAIN_TEXT,
                        }}>
                            {PAGE_THREE_TITLE}
                        </h1>
                        <CustomDivider/>

                        {/*// Avatars*/}
                        <Box display="flex"
                             flexWrap="wrap">
                            {teamDetails.map((detail) =>
                                <AvatarComponent detail={detail}/>
                            )}
                        </Box>
                    </div>

                    {/*// Just a little space from the footer.*/}
                    <div style={{height: 200}}/>
                </Parallax>
            </div>
        </>
    );
}

export default AboutUsPage;
