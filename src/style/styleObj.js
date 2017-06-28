import { getLayerColor } from '../assets/layers';
export const layerStyle = (height=30, width=200, x=0, y=0, selected, name) => {
    return {
        position:'relative',
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: getLayerColor(name),
        // backgroundColor:'white',
        color: "#666",
        aligh: 'center',
        margin: '5px auto',
        padding: '5px',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        zIndex: selected?100:1,
        transform: `translate(${x}px, ${y}px)`,
        // borderRadius: '5px',
        // boxShadow: '1px 1px 2px #666',
        boxShadow: `rgba(0, 0, 0, 0.2) 1px 1px 2px`,
    }
}

export const inOutStyle = (name, x=0, y=0) => {
    return {
        height: `30px`,
        width: `180px`,
        backgroundColor: '#d2e5a6',
        // color: "#333",
        // backgroundColor:'white',
        color: "#888",
        margin: '5px auto',
        padding: '5px',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        transform: `translate(${x}px, ${y}px)`,
        borderRadius: '50%',
        // boxShadow: '3px 3px 2px #666',
        boxShadow: `rgba(0, 0, 0, 0.2) 1px 1px 2px`,
    }
}