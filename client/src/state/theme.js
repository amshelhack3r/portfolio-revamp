const globals = {
    primary: "#081229",
    secondary: "#0F101A",
    outline_red: "#BF1650",
    whitesmoke: "#f5f5f5",
    primary_accent: "#191D3A"


}
//write my dark themes here
export const darkTheme = {

    app: {
        backgroundColor: "#081229",
        fontFamily: `'Cantarell', sans-serif`,
        color: "white",
    },
    hero: {
        backgroundColor: globals.primary_accent,
        boxShadow: `0 2px 8px 2px ${globals.outline_red}`
    },
    avatar: "images/avatar.jpg",
    avatarOutline: {
        border: `1px solid ${globals.outline_red}`
    },

    smiley: globals.outline_red,
    hr: {
        borderTop: `medium double ${globals.whitesmoke}`,
        color: globals.whitesmoke

    },
    heroText: {
        color: globals.whitesmoke,
        textAlign: "center",
        fontWeight: "700"
    },
    heroBottom: {
        backgroundColor: globals.primary
    },
    stack_span: {
        border: `2px solid ${globals.primary_accent}`
    },
    info_card: {
        backgroundColor: globals.primary_accent
    },
    pill: {
        border: `1px solid ${globals.outline_red}`,
        color: globals.whitesmoke

    },
    content_btn: {
        border: `3px solid ${globals.whitesmoke}`,
        color: globals.outline_red
    },
    project_container: {
        // boxShadow: `0 2px 8px 2px ${globals.primary}`
    },
    social: {
        fontSize: "55px",
        color: globals.whitesmoke
    },
    heading: {
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: globals.outline_red,
        color: globals.whitesmoke
    },
    built: {
        color: globals.outline_red,
        textDecoration: "underline",
        fontWeight: "600"
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
    hero: {
        backgroundColor: "#F5F5F5",
        boxShadow: `0 2px 8px 2px ${globals.primary}`
    },
    avatarOutline: {
        border: `1px solid ${globals.primary}`
    },

    smiley: "#1890FF",
    hr: {
        borderTop: `medium double ${globals.outline_red}`,
        color: globals.outline_red

    },
    heroText: {
        color: globals.primary,
        textAlign: "center"
    },
    heroBottom: {
        backgroundColor: "#dbedf3",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"

    },
    stack_span: {
        border: `1px solid ${globals.primary}`
    },
    info_card: {
        backgroundColor: "white"
    },
    pill: {
        border: `1px solid ${globals.secondary}`,
        color: globals.secondary

    },
    content_btn: {
        border: `3px solid ${globals.secondary}`,
        color: globals.secondary
    },
    project_container: {
        boxShadow: `0 2px 8px 2px ${globals.primary}`
    },
    social: {
        fontSize: "55px",
        color: globals.primary
    },
    heading: {
        textAlign: "center",
        textDecoration: "underline",
        textDecorationColor: globals.primary,
        color: globals.primary
    },
    built: {
        color: globals.outline_red,
        textDecoration: "underline",
        fontWeight: "600"
    }

}

