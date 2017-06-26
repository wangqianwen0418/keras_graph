import { getLayerColor } from '../assets/layers';
export const layerStyle = (height=30, width=200, x=0, y=0, name) => {
    return {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: getLayerColor(name),
        aligh: 'center',
        margin: '5px auto',
        padding: '5px',
        textAlign: 'center',
        color: "#333",
        fontSize: '20px',
        fontFamily: 'sans-serif',
        transform: `translate(${x}px, ${y}px)`,
        borderRadius: '5px',
        boxShadow: '2px 2px 1px #111'
    }
}

export const inOutStyle = (name, x=0, y=0) => {
    return {
        height: `30px`,
        width: `180px`,
        backgroundColor: '#d2f5a6',
        margin: '5px auto',
        padding: '5px',
        textAlign: 'center',
        color: "#333",
        fontSize: '20px',
        fontFamily: 'sans-serif',
        transform: `translate(${x}px, ${y}px)`,
        borderRadius: '50%',
        border:'solid 2px #eee'
    }
}