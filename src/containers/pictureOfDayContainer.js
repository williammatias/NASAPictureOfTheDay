import { connect} from 'react-redux'
import PictureOfDay from "../Components/PictureOfDay/PictureOfDay";
import {fetchPictureOfDay} from "../actions";

function mapStateToProps(state) {
    return {
        pictureOfDay: state.pictureOfDay
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loadNASAPictureOfDay: () => dispatch(fetchPictureOfDay()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PictureOfDay);