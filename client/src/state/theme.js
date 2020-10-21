const globals = {
    primary: "#081229",
    secondary: "#0F101A",
    outline_red: "#BF1650",
    whitesmoke: "#f5f5f5"

}
//write my dark themes here
export const darkTheme = {

    app: {
        backgroundColor: "#081229",
        fontFamily: `'Cantarell', sans-serif`,
        color: "white",
    },
    avatar: "images/avatar.jpg",
    avatarCard: {
        width: "350",
        // border: `2px solid ${globals.outline_red}`,
        boxShadow: `0 19px 38px ${globals.outline_red}, 0 15px 12px ${globals.outline_red}`
    },
    about: {
        fontSize: '28px',
        lineHeight: '44px',
        textAlign: 'center'
    },
    smiley: globals.outline_red,
    hr: {
        borderTop: `medium double ${globals.whitesmoke}`,
        color: globals.whitesmoke

    }

}

//write my light themes here
export const lightTheme = {
    app: {
        backgroundColor: "#f5f5f5",
        fontFamily: "'Cantarell', sans-serif",
        color: "#0F101A",
    },
    avatar: "images/avatar_light.jpg",
    avatarCard: {
        width: "350",
        border: `2px solid ${globals.primary}`,
        boxShadow: `0 19px 38px ${globals.primary}, 0 15px 12px ${globals.primary}`
    },
    about: {
        fontSize: '28px',
        lineHeight: '44px',
        textAlign: 'center'
    },
    smiley: globals.outline_red,
    hr: {
        borderTop: `medium double ${globals.outline_red}`,
        color: globals.outline_red

    }
}

