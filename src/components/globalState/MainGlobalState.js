import AppGlobalState from './AppGlobalState';
import {StoreProvider} from './store'

function MainGlobalState(props) {
    return (
        <StoreProvider>
            <AppGlobalState/>
        </StoreProvider>
    );
}

export default MainGlobalState;

