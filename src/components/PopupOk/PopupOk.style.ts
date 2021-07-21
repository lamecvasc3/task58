import { makeStyles  } from "@material-ui/core";

export const useStyle = makeStyles({
    box: {
        backgroundColor: '#F2F2F2',
        position: 'absolute', 
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '7vh',
    },

    txtconcluido: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    imgconc: {
        width: '100%'
    }
})