import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label }from './styles';

export default function PayButton({ onPress, focused }){
  return(
    <TouchableWithoutFeedback onPress={onPress} >
      <Button
        colors={
          focused
          ? ['#1b5e32', '#1b5e32']
          : ['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30} 
          color={focused ? '#565957' : '#fff'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}