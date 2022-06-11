import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

    root: {
        maxWidth: '100%',

    },

    image: {
        width: '100%',
        display: 'block',
        margin: 'auto',
        paddingTop: '10px',
    },


    media: {
        height: 0,
        borderRadius: '8px',
        paddingTop: '100%',
        justifyContent: 'center'

    },

    cardActions: {
        display:'flex',
        justifyContent: 'flex-end'

    },

   cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    

}));