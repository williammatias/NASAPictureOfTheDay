import { connect} from 'react-redux'
import PictureOfDay from "../Components/PictureOfDay/PictureOfDay";

function mapStateToProps(state) {
    return {
        count: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loadNASAPictureOfDay: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PictureOfDay);