import {createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../containers/Home'

const HomeNavigator = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
})

const HomeRootNavigator = createAppContainer(HomeNavigator)

export default HomeRootNavigator