import { connect } from 'react-redux'
import { changeCode } from '../actions'
import CodeView from '../components/CodeView';

const mapStateToProps = (state) => {
  return {
    code: state.content||''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCode: (code) => {
      dispatch(changeCode(code))
    }
  }
}

const CodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeView)

export default CodeContainer