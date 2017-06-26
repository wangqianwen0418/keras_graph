import code,{title} from '../../assets/code_examples/minist_cnn';
const initialState = {
  content: code,
  title
}

initialState.layers = getLayers(initialState.content)


const codeApp = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_GRAPH":
      return {content: action.content};
    case "CHANGE_CODE":
      return  {
        title,
        content: action.content,
        layers: getLayers(action.content)
      };
    case "MOVE_LAYERS":
      return  {
        title,
        content: state.content,
        layers: reOrder(action.from, action.to, state.layers)
      };

    default:
      return state;
  }
};

function getLayers (content) {
  let addReg = /model\.add\((.*)\)\)/g;
  let seqReg = /Sequential\(\[(^}\]+)\]\)/;
  let arr;
  let result = [];
  if((arr = seqReg.exec(content))!== null){
    let layers = arr[0]
  } 
  // let index = 0
  while ((arr = addReg.exec(content)) !== null) {
    // result.push(content[arr.index]);
    let layer = arr[0].split('add(')[1]
    let name = layer.split('(')[0]
    let pars = layer.split(name+'(')[1].replace(/\)\)/g,'')
    result.push({name, pars})
    // index+=1
  }

  return result

};
function reOrder(from, to, layers) {
    if (from==to) return layers
    let len = layers.length
    to = Math.max(0, (to>=len)?len-1:to)
    let newLayers = layers.splice(0)
    let temp = newLayers[to]
    newLayers[to] = newLayers[from]
    newLayers[from] = temp
    return newLayers
}
export default codeApp;
